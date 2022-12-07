import React from 'react';
import static_image from '../../Assets/Static/devops-banner.png';

type BannerProps = {
  data: any;
};

const BannerBlock: React.FC<BannerProps> = (props: any) => {
  const data = props.data?.blocks.filter(
    (item: any) => item.block_name === 'Banner'
  );

  return (
    <div>
      <div
        style={{
          backgroundImage:
            data && data[0] && data[0].block_icon !== null
              ? `url(${data[0].block_icon})`
              : `url(${static_image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // borderTop: '8px solid #CC092F',
          height: '160px',
        }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '160px',
            color: '#fff',
            fontSize: '40px',
            fontWeight: 900,
            textAlign: 'center',
          }}>
          {data && data[0] && data[0].block_detial}
        </div>
      </div>
    </div>
  );
};

export default BannerBlock;
