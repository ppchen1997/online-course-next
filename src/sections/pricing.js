import React, { useState } from 'react';
import { Box, Grid, Container } from 'theme-ui';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import BlockTitle from 'components/block-title';
import PriceCard from '../components/price-card';

const pricingMonthlyData = [
  {
    name: '免費方案',
    description: '不論何時、何地，都能即時分析您的口說',
    buttonText: '選擇方案',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '每週讓您觀賞兩堂課程',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '最基本的口說分析服務',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle/>,
        text: '專屬的學習歷程規劃，進步好神速',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: '真人助教為您及時解惑',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: '線下實體活動、工作坊收費參加',
        isAvailable: false,
      },
    ],
  },
  {
    header: '可參加零元挑戰',
    name: '會員方案',
    description: '完整功能，每堂課不到10元',
    priceWithUnit: 'NT$ 249/',
    pricePeriod: '月',
    buttonText: '選擇方案',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '能夠無限制的觀賞所有課程',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '口說音檔與練習，完整分析報告',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '專屬的學習歷程規劃，進步好神速',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '真人助教為您及時解惑',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '線下實體活動、工作坊任您參加',
        isAvailable: true,
      },
    ],
  },
];

const pricingYearlyData = [
  {
    name: '免費方案',
    description: '不論何時、何地，都能即時分析您的口說',
    buttonText: '選擇方案',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '每週讓您觀賞兩堂課程',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '最基本的口說分析服務',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: '專屬的學習歷程規劃，進步好神速',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: '真人助教為您及時解惑',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: '線下實體活動、工作坊收費參加',
        isAvailable: false,
      },
    ],
  },
  {
    header: '可參加零元挑戰',
    name: '會員方案',
    description: '完整功能，每堂課不到5元',
    priceWithUnit: 'NT$ 149/',
    pricePeriod: '月',
    buttonText: '選擇方案',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '能夠無限制的觀賞所有課程',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '口說音檔與練習，完整分析報告',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '專屬的學習歷程規劃，進步好神速',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '真人助教為您及時解惑',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '線下實體活動、工作坊任您參加',
        isAvailable: true,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState(false);
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          sx={styles.pricing.blockTitle}
          tagline="Pricing Plan"
          heading="成為會員"
        />
        <Box sx={styles.pricing.btnWrap}>
          <Box as="ul" sx={styles.pricing.btnUl}>
            <Box
              as="li"
              className={` ${plan === false ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.pricing.btn}
              onClick={() => {
                setPlan(false);
              }}
            >
              3個月方案
            </Box>
            <Box
              as="li"
              className={` ${plan === true ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.pricing.btn}
              onClick={() => {
                setPlan(true);
              }}
            >
              6個月方案
            </Box>
          </Box>
        </Box>

        <Grid sx={styles.pricing.wrapper}>
          {plan === true
            ? pricingYearlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
          {plan === false
            ? pricingMonthlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  pricing: {
    paddingTop: 100,
    paddingBottom: 150,
    '@media(max-width:991px)': {
      paddingTop: 60,
      paddingBottom: 60,
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0)',
      },
    },
    '.priceFade': {
      animationName: 'fadeInUp',
      animationDuration: '1s',
    },
    blockTitle: {
      textAlign: 'center',
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '25px',
    },
    btnUl: {
      margin: 0,
      listStyle: 'none',
      backgroundColor: '#F7F8FB',
      padding: '6px',
      borderRadius: '5px',
      display: 'inline-block',
    },
    btn: {
      color: 'black',
      padding: '10px 25px',
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'black',
        backgroundColor: 'transparent',
      },
      '&.active': {
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
      },
      '@media(max-width: 375px)': {
        padding: '10px 22px',
      },
    },
    wrapper: {
      display: 'grid',
      gridGap: '30px',
      gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
      marginLeft: 'auto',
      marginRight: 'auto',
      width: ['100%', null, null, null, '990px'],
    },
  },
};
