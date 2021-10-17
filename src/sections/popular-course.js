import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';

const popularCourseData = [
  {
    title:
      '掌握口語表達與舞台魅力，葉丙成的簡報必修課',
    reviewCount: '5.0 (392 評論)',
    watchCount: '2,538 觀看次數',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    list: [
      {
        content: '適合容易緊張，不知如何開口的人',
      },
      {
        content: '八堂課後口說練習，讓你全方面進步',
      },
      {
        content: '獨門表達技巧，從把話說好，到說入人心',
      },
      {
        content: '葉丙成獨家授權，最受好評的表達課程',
      },
    ],
  },
  
  // {
  //   title: 'After effects animation tutorial with photoshop documents',
  //   reviewCount: '5.0 (392 reviews)',
  //   watchCount: '1,037 students watched',
  //   videoLink: 'L9jU-IIN0ng',
  //   starCount: 5,
  //   expanded: false,
  //   list: [
  //     {
  //       content: 'How to reduce file pixel dimentions without loosing quality',
  //     },
  //     {
  //       content: 'How to make logo pixel perfects with different extension',
  //     },
  //     {
  //       content: 'Create vector file from restarize layer styles',
  //     },
  //     {
  //       content: 'Make color gradient with photoshop build-in tools',
  //     },
  //   ],
  // },
  // {
  //   title: 'Adobe illustrator vector art design mockup',
  //   reviewCount: '5.0 (392 reviews)',
  //   watchCount: '1,037 students watched',
  //   videoLink: 'L9jU-IIN0ng',
  //   starCount: 5,
  //   expanded: false,
  //   list: [
  //     {
  //       content: 'How to reduce file pixel dimentions without loosing quality',
  //     },
  //     {
  //       content: 'How to make logo pixel perfects with different extension',
  //     },
  //     {
  //       content: 'Create vector file from restarize layer styles',
  //     },
  //     {
  //       content: 'Make color gradient with photoshop build-in tools',
  //     },
  //   ],
  // },
];

const PopularCourse = () => {
  return (
    <Box as="section" id="courses" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Quality features"
          heading="最受歡迎的 口說訓練課程"
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    paddingBottom: ['100px'],
    '@media(max-width: 575px)': {
      paddingBottom: '100px',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
      },
    },
    col: {},
  },
};
