import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Grid,
  Page,
  Typography,
  Container,
  Pagination,
} from '@mineral/core';
import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultsPage: React.FC = () => {
  const [items, setItems] = React.useState<unknown>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [totalResults, setTotalResults] = React.useState<number>(0);
  const [page, SetPage] = React.useState(1);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q');
  const searchtrigger = useCallback(() => {
    //TODO for mineral-community
    setLoading(true);
    SetPage(1);
    //@ts-ignore iceUtils package will have to update the IPCE interface used in Window interface to include open as a function
    window?.IPCE?.open({ search: query, mode: 'off' });
  }, [query]);
  React.useEffect(() => {
    setItems(undefined);
    searchtrigger();
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [query, searchtrigger]);
  window.addEventListener('IPCELOADED', searchtrigger);
  window.addEventListener('iceSearchResponse', iceSearchResponseHandler);
  function iceSearchResponseHandler(res: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setItems(res.detail.data.aemSearch.hits);
    setTotalResults(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      res.detail.data.aemSearch.total.value
    );
    setLoading(false);
  }
  const handleChange = (page: number) => {
    SetPage(page);
  };
  if (items === undefined && loading) {
    return (
      <Page>
        <Container>
          <Box sx={{ textAlign: 'center', mt: '20em' }}>
            <CircularProgress color="info" />
          </Box>
        </Container>
      </Page>
    );
  } else {
    return (
      <Page>
        <Container>
          <Box sx={{ my: '1em' }}>
            <Typography variant="h1">Showing Results for "{query}"</Typography>
          </Box>
          <Box>
            <Typography>{totalResults} Results Found</Typography>
          </Box>
          <Grid
            sx={{
              mt: '1em',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
            }}>
            {
              //@ts-ignore temp
              (items || []).map((data, index) => {
                const start = (page - 1) * 9;
                return (
                  index >= start &&
                  index < start + 9 && (
                    <Grid item key={index} sx={{ mr: '1em', my: '1em' }}>
                      <Card
                        sx={{
                          minHeight: '250px',
                          overflow: 'hidden',
                          maxHeight: '250px',
                        }}>
                        <CardActionArea
                          sx={{ height: '100%' }}
                          onClick={() => {
                            window.open(data._source.url as string);
                          }}>
                          <CardContent sx={{ minHeight: '7em' }}>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                mt: '1em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: '2',
                                WebkitBoxOrient: 'vertical',
                                wordBreak: 'break-all',
                              }}>
                              {data._source.metaData.headline}
                            </Typography>
                          </CardContent>
                          <CardContent
                            sx={{
                              minHeight: '14em',
                            }}>
                            <Typography
                              color="text.secondary"
                              sx={{
                                mt: '0.5em',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: '4',
                                WebkitBoxOrient: 'vertical',
                                wordBreak: 'break-all',
                              }}>
                              {data._source.pageDescription === null
                                ? 'Description Unavailable'
                                : data._source.pageDescription}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
                );
              })
            }
          </Grid>
          {totalResults > 9 && (
            <Pagination
              count={Math.ceil((totalResults as unknown as number) / 9)}
              size="large"
              onChange={(event, sum) => handleChange(sum)}
              sx={{
                mb: '1em',
                '& .MuiPagination-ul': {
                  justifyContent: 'flex-end',
                },
              }}
            />
          )}
        </Container>
      </Page>
    );
  }
};
export default SearchResultsPage;
