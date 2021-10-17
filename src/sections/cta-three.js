import { Box, Flex, Text, Grid, Heading, Container } from 'theme-ui';
import React from 'react';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';

const CtaThree = () => {
  return (
    <Box as="section" sx={styles.ctaThree}>
      <Container>
        <Flex sx={styles.ctaThree.row}>
          <Box sx={styles.ctaThree.colTwo}>
            <Box className="my-auto">
              <Box sx={styles.ctaThree.content}>
                <BlockTitle
                  sx={styles.ctaThree.blockTitle}
                  tagline="Core features"
                  heading={
                    '口說分析，有奪厲害？  '
                  }
                />
                <Text as="p">
                  {
                    '獨家AI口說分析系統，有超厲害的三大功能： \n 一、清晰度分析。讓你不怕講話字又糊在一起。 \n 二、流暢度分析。讓你順暢、流利、自信的開口。 \n 三、冗言贅字分析。這是大家最愛需要的功能了。'
                  }
                </Text>
                <Link
                  path="#"
                  label="免費體驗課程"
                  variant="buttons.primary"
                />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.ctaThree.colOne}>
            <Grid sx={styles.ctaThree.grid}>
              <Box sx={styles.ctaThree.box}>
                <Heading as="h3" sx={styles.ctaThree.color1}>
                  8千人+
                </Heading>
                <Text as="p">{'每天有這麼多人\n都在這裡練習口說'}</Text>
              </Box>
              <Box sx={styles.ctaThree.box}>
                <Heading sx={styles.ctaThree.color2} as="h3">
                  150堂+
                </Heading>
                <Text as="p">
                  {'多元練習課程 \n 讓你為各種口說情境做好準備'}
                </Text>
              </Box>
              <Box sx={styles.ctaThree.box}>
                <Heading sx={styles.ctaThree.color3} as="h3">
                  90所+
                </Heading>
                <Text as="p">{'使用我們產品的大專院校\n並且逐步增加中'}</Text>
              </Box>
              <Box sx={styles.ctaThree.box}>
                <Heading sx={styles.ctaThree.color4} as="h3">
                  5千萬+
                </Heading>
                <Text as="p">
                  {'這是我們的每年營收 \n 歡迎您來投資'}
                </Text>
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaThree;

const styles = {
  ctaThree: {
    paddingTop: [50, null, null, null, 50, 120],
    paddingBottom: [120, null, null, null, 100, 320],
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: ['column', null, null, null, 'row-reverse'],
    },
    colOne: {
      flex: ['0 0 100%', null, null, null, '0 0 55%'],
      paddingRight: ['0', null, null, null, null, '34px'],
    },
    colTwo: {
      flex: ['0 0 100%', null, null, null, '0 0 45%'],
      display: 'flex',
      pl: ['0', null, null, null, '40px', '0'],
      '.my-auto': {
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '100%',
      },
      '@media(max-width:991px)': {
        flex: '0 0 100%',
        marginTop: '0px',
        marginBottom: '45px',
        textAlign: 'center',
      },
    },
    grid: {
      display: 'grid',
      gridGap: '45px',
      gridTemplateColumns: '1fr 1fr',
      '@media(max-width:1199px)': {
        gridGap: '30px',
      },
      '@media(max-width:425px)': {
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
      },
    },
    blockTitle: {
      h3: {
        fontSize: ['24px', null, null, '30px', '36px', null, '48px'],
        lineHeight: ['1.44', null, null, null, null, null, '1.15'],
        lineHeight: 1.44,
        maxWidth: ['275px', '450px', null, null, '100%'],
        marginLeft: ['auto', null, null, null, '0'],
        marginRight: ['auto', null, null, null, '0'],
        whiteSpace: ['normal', null, null, null, 'pre-line'],
      },
    },
    content: {
      '@media(min-width:1025px)': {
        paddingLeft: '41px',
      },
      '> p': {
        whiteSpace: ['normal', null, null, null, 'pre-line'],
        fontSize: ['15px', null, null, '16px', null, '18px'],
        lineHeight: ['2', null, null, null, null, '2.33'],
        color: '#02073E',
        marginBottom: '30px',
        marginTop: '25px',
        '@media(max-width:425px)': {
          whiteSpace: 'normal',
          paddingLeft: '15px',
          paddingRight: '15px',
          marginTop: '20px',
          marginBottom: '20px',
        },
      },
      '@media(max-width:991px)': {
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '20px',
      },
    },
    box: {
      boxShadow: '0px 25px 100px rgba(69, 88, 157, 0.08)',
      borderRadius: '10px',
      textAlign: 'center',
      position: 'relative',
      paddingTop: '95.5px',
      paddingBottom: '95.5px',
      '&:nth-of-type(1)': {
        top: '70px',
      },
      '&:nth-of-type(3)': {
        top: '70px',
      },
      '@media(max-width:1199px)': {
        paddingTop: '35.5px',
        paddingBottom: '35.5px',
        '&:nth-of-type(1)': {
          top: '40px',
        },
        '&:nth-of-type(3)': {
          top: '40px',
        },
      },
      '@media(max-width:425px)': {
        '&:nth-of-type(1)': {
          top: '0px',
        },
        '&:nth-of-type(3)': {
          top: '0px',
        },
      },
      h3: {
        margin: 0,
        fontSize: '36px',
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: '-1.5px',
        '@media(min-width:1281px)': {
          fontSize: '55px',
        },
        '@media(min-width:1441px)': {
          fontSize: '72px',
        },
      },
      '> p': {
        margin: 0,
        marginTop: '7px',
        fontSize: '18px',
        color: '#0F2137',
        lineHeight: 1.39,
        letterSpacing: '-0.5px',
        opacity: 0.7,
        whiteSpace: 'pre-line',
        '@media(max-width:575px)': {
          fontSize: '15px',
          lineHeight: 1.65,
        },
      },
    },
    color1: {
      color: '#EF9E48',
    },
    color2: {
      color: '#FF753A',
    },
    color3: {
      color: '#FA578E',
    },
    color4: {
      color: '#E682FF',
    },
  },
};
