import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
import walk_engineering from '../../Assets/Static/walk_engineering.svg';
import walk_support from '../../Assets/Static/walk_support.svg';
import walk_security from '../../Assets/Static/walk_security.svg';
import walk_marketing from '../../Assets/Static/walk_marketing.svg';
import walk_management from '../../Assets/Static/walk_management.svg';
import walk_applications from '../../Assets/Static/walk_applications.svg';
import walk_legal from '../../Assets/Static/walk_legal.svg';
import success from '../../Assets/Static/success.svg';
import React from 'react';

class DeliveryChecklist extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      expanded: null,
    };
  }

  handleChange = (panel: any) => (event: any, newExpanded: any) => {
    this.setState({ expanded: newExpanded ? panel : false });
  };

  render() {
    return (
      <div style={{ width: '1200px', margin: '40px auto 30px' }}>
        <div>
          <Grid
            item
            sm={12}
            style={{ marginTop: '30px' }}
            id="release-management-accordion"
            className="clarity">
            <div style={{ position: 'relative' }}>
              <h2>Product Delivery Compliance Checklist</h2>
              <p style={{ marginTop: '-15px', marginBottom: '15px' }}>
                A high level overview of the items that need to be completed by
                role. Hover over for more information. For more detailed
                information,
                <p>
                  please reference the checklist spreadsheet (
                  <a
                    href="https://docs.google.com/spreadsheets/d/1og6_VXffJ6O9mscVK2LspF4CeTT6aYN3/edit#gid=829629527"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#3272d9', fontWeight: '100' }}>
                    link
                  </a>
                  ) Items in the accordion.
                </p>
              </p>
              {DeliverycheckListData.map((item, index) => (
                <Accordion
                  key={index}
                  expanded={this.state.expanded === item.id}
                  onChange={this.handleChange(item.id)}>
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header">
                    <Typography>{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    />
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </Grid>
        </div>
        <div>
          <p className="chekList">
            Checklist Items vary by the type of release. Please refer to the
            table below to understand what items need to be completed for each
            type of release. Please note that this is already pre-poulated in
            Clarity based on the release that is chosen.
          </p>
          <TableContainer className="softThird">
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: '75%' }}>&nbsp;</TableCell>
                  <TableCell align="left" style={{ width: '5%' }}>
                    Major
                  </TableCell>
                  <TableCell align="center" style={{ width: '10%' }}>
                    Maintenance
                  </TableCell>
                  <TableCell align="center" style={{ width: '10%' }}>
                    Hot Fix
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/157U0Ub1c1W13JoS0F7PIi5RfFDtms2D-?usp=sharing"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Third Party Software Request
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/195_lZ03T3-JkTzMKHZamIs8YKfZtnyjc"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Static Application Security Testing
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/195_lZ03T3-JkTzMKHZamIs8YKfZtnyjc"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Standard Penetration Testing
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/195_lZ03T3-JkTzMKHZamIs8YKfZtnyjc"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Advanced Penetration Testing
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/195_lZ03T3-JkTzMKHZamIs8YKfZtnyjc"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Performed Antivirus / Malware Scan
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/1ufUI0l3uDauqCa5X_p71VgnlQuVzoESt"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      ECCN
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/1qgNjxF6wGaU2SgcFy-Vyb-KleVNLgSGs"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Master, Escrow Source Submission and Trade Agreement Act
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://sites.google.com/broadcom.com/gto-portal/cybersecurity/cyber-security-policies-standards-and-certifications/corporate-information-security-policies"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Copyright and Licensing Standards
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/1HKG1hvTDw4BYu9dWwICHYuN-2e-rgGkx"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Privacy by Design Checklist
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/1HKG1hvTDw4BYu9dWwICHYuN-2e-rgGkx"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Privacy Transparency Notice
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    Patent Submissions for Inventions
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    Confirmed download available on Download Center.
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    Perpetually licensed products only- verified source escrow
                    given to Third Party escrow repository.
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    Verified Completed Code Integrity form for Trade Compliance
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    Product codes updated in Oracle for GA
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    Product Lifecycle - Systems updated with Product Lifecycle
                    Information.
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/1EiwrA3TIau2Iut-ULad_UcoiBJOOaBQy"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Permission License for China
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://sites.google.com/broadcom.com/aod-central/aod-processes/accessibility"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      VPAT
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://sites.google.com/broadcom.com/sales-resource-center/home/digital-hub-usage#h.p_bMyQAdgcfdqf"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Telemetry
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://broadcomitsm.wolkenservicedesk.com/wolken-support/article?articleNumber=KB0007102"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Product Lifecycle - Published GA, EOS, EOL announcement to
                      customers
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/drive/folders/194v4b5xz9vxjN5RnVwCQ6xEj9B7tJbUk"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      New Product Sku Approval
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://drive.google.com/file/d/1I5mL83W3NJIw36Jelis0fWKU3s-EPjNt/view?usp=sharing"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Legal Notices Content
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://forms.gle/JwuE5xujv7NcMJHJA"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Complete Form for the number of Security Vulnerabilities
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">&nbsp;</TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">
                    <a
                      href="https://broadcom.ent.box.com/folder/150664581487"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                      rel="noreferrer">
                      Upload Security Reports to Box Folder
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                  <TableCell align="center">
                    <img src={success} alt="no_image" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}

const DeliverycheckListData = [
  {
    id: 1,
    title: 'Engineering',
    content: `<div class="clarityRelease"><p style="margin-left: 25px;"><a href="https://drive.google.com/drive/folders/157U0Ub1c1W13JoS0F7PIi5RfFDtms2D-?usp=sharing"target="_blank style="color:#3272d9;">Third Party Software Request</a></p><p style="margin-left: 25px;"> <a href="https://drive.google.com/drive/folders/195_lZ03T3-JkTzMKHZamIs8YKfZtnyjc" target="_blank">Status Application Security Testing</a></p><p style="margin-left: 25px;">   <a href="https://drive.google.com/drive/folders/195_lZ03T3-JkTzMKHZamIs8YKfZtnyjc" target="_blank">Standard Penetration Testing</a> </p><p style="margin-left: 25px;"> <a href="https://drive.google.com/drive/folders/195_lZ03T3-JkTzMKHZamIs8YKfZtnyjc" target="_blank">Advanced Penetration Testing</a></p><p style="margin-left: 25px;">  <a href="https://drive.google.com/drive/folders/195_lZ03T3-JkTzMKHZamIs8YKfZtnyjc" target="_blank">Performed Antivirus / Malware Scan </a> </p><p style="margin-left: 25px;">  <a href="https://drive.google.com/drive/folders/1ufUI0l3uDauqCa5X_p71VgnlQuVzoESt" target="_blank">ECCN</a></p><p style="margin-left: 25px;"><a href="https://drive.google.com/drive/folders/1qgNjxF6wGaU2SgcFy-Vyb-KleVNLgSGs" target="_blank">Master, Escrow Source Submission and Trade Agreement</a> </p><p style="margin-left: 25px;">    <a href="https://sites.google.com/broadcom.com/gto-portal/cybersecurity/cyber-security-policies-standards-and-certifications/corporate-information-security-policies" target="_blank">Copyright and Licensing Standards</a> </p><p style="margin-left: 25px;"><a href="https://drive.google.com/drive/folders/1HKG1hvTDw4BYu9dWwICHYuN-2e-rgGkx" target="_blank">Privacy by Design Checklist</a> </p><p style="margin-left: 25px;">    <a href="https://drive.google.com/drive/folders/1HKG1hvTDw4BYu9dWwICHYuN-2e-rgGkx"target="_blank">Privacy Transparency Notice</a></p><img src=${walk_engineering} alt="icon" class="imgEngg" /></div>`,
  },
  {
    id: 2,
    title: 'IT Application Engineer',
    content: `<div class="clarityRelease"><p style="margin-left: 25px;">Confirmed Download Available on Download Center</p><p style="margin-left: 25px;">Verified Source Escrow Given to Third Party Escrow Repository</p><p style="margin-left: 25px;"> Verified Completed Code Integrity form for Trade Compliance</p><p style="margin-left: 25px;"> </p><p style="margin-left: 25px;"> Product Codes update in Oracle for GA</p><p style="margin-left: 25px;"> Product Lifecycle - Systems Updated with Product Lifecycle Information </p><img src=${walk_applications} alt="icon" class="imgEngg" /></div>`,
  },
  {
    id: 3,
    title: 'Product Management',
    content: `<div class="clarityRelease"><p style="margin-left: 25px;"> <a href="https://drive.google.com/drive/folders/1EiwrA3TIau2Iut-ULad_UcoiBJOOaBQy" target="_blank">Permission License for China </a></p><p style="margin-left: 25px;"><a href="https://sites.google.com/broadcom.com/aod-central/aod-processes/accessibility" target="_blank">VPAT</a></p><p style="margin-left: 25px;"><a href="https://sites.google.com/broadcom.com/sales-resource-center/home/digital-hub-usage#h.p_bMyQAdgcfdqf" target="_blank">Telemetry</a></p><p style="margin-left: 25px;"><a href="https://broadcomitsm.wolkenservicedesk.com/wolken-support/article?articleNumber=KB0007102" target="_blank">Product Lifecycle - Published GA, EOS, EOL announcement to customers</a></p><p style="margin-left: 25px;"> <a href="https://drive.google.com/drive/folders/194v4b5xz9vxjN5RnVwCQ6xEj9B7tJbUk" target="_blank">New Product Sku Approval</a></p><p style="margin-left: 25px;">  <a href="https://drive.google.com/file/d/1I5mL83W3NJIw36Jelis0fWKU3s-EPjNt/view?usp=sharing" target="_blank">Legal Notices Content</a></p><img src=${walk_management} alt="icon" class="imgEngg" /></div>`,
  },
  {
    id: 4,
    title: 'Security Champion',
    content: `<div class="clarityRelease"><p style="margin-left: 25px;"><a href="https://drive.google.com/drive/folders/195_lZ03T3-JkTzMKHZamIs8YKfZtnyjc" target="_blank">Complete AOD Security Exception Approval Template</a></p><p style="margin-left: 25px;"><a href="https://forms.gle/JwuE5xujv7NcMJHJA"
    target="_blank">Complete Form for # of Security Vulnerabilities</a></p><p style="margin-left: 25px;"><a href="https://broadcom.ent.box.com/folder/150664581487"
    target="_blank">Upload Security Reports to Box Folder</a></p><img src=${walk_security} alt="icon" class="imgEngg" /></div>`,
  },
  {
    id: 5,
    title: 'Legal',
    content: `<div class="clarityRelease"><p style="margin-left: 25px;">Need to be notified that all checklist items are completed</p><img src=${walk_legal} alt="icon" class="imgEngg" /></div>`,
  },
  {
    id: 6,
    title: 'Support',
    content: `<div class="clarityRelease"><p style="margin-left: 25px;">Need to be notified that all checklist items are completed</p><img src=${walk_support} alt="icon" class="imgEngg" /></div>`,
  },
  {
    id: 7,
    title: 'Product Marketing',
    content: `<div class="clarityRelease"><p style="margin-left: 25px;">Need to be notified that all checklist items are completed</p><img src=${walk_marketing} alt="icon" class="imgEngg" /></div>`,
  },
];

export default DeliveryChecklist;
