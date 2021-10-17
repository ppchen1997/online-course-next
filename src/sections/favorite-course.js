import { Box, Grid, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import FavoriteCard from 'components/favorite-card';
import fevCardImageOne from 'assets/ya-2-2.jpg';
import fevCardImageTwo from 'assets/hen.png';
import fevCardImageThree from 'assets/min.png';

import { Swiper, SwiperSlide } from 'swiper/react';

const favoriteCourseData = [
  {
    title: '葉丙成：「表達，是一輩子的課題。好的練習平台，是進步的關鍵。」',
    image: fevCardImageOne,
    reviewCount: '5.0 (392 評論)',
    watchCount: '2,538 觀看次數',
    videoLink: 'g9avOpUOREM',
    starCount: 5,
  },
  {
    title:
      '韓國瑜：「口語表達好的話，處處是陽光，不好的話，處處是障礙。」',
    image: fevCardImageTwo,
    reviewCount: '4.5 (524 評論)',
    watchCount: '3,532 觀看次數',
    videoLink: 'L9jU-IIN0ng',
    starCount: 4,
  },
  {
    title:
      '管中閔：「大學時大家覺得我很頹廢，但我夜晚生活很豐富，我都在練口說」',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 評論)',
    watchCount: '1,037 觀看次數',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
];

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <Box as="section" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="Quality features"
          heading="真滴好用，這些大咖怎麼說？"
        />
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData.map((course, index) => (
            <SwiperSlide key={index}>
              <FavoriteCard
                starCount={course.starCount}
                title={course.title}
                image={course.image}
                reviewCount={course.reviewCount}
                watchCount={course.watchCount}
                videoLink={course.videoLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ['60px', null, null, '110px', '50px'], //110->80
    pb: [null, null, null, '30px', '50px', '0'],
    container: {
      maxWidth: 1440,
      '@media(max-width:1440px)': {
        maxWidth: 1240,
      },
      '.swiper-container': {
        pb: '30px',
        overflow: [null, null, null, null, null, 'visible'],
      },
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 30,
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr',
      },
      '@media(max-width: 575px)': {
        gridTemplateColumns: '1fr',
      },
    },
    col: {
      display: 'flex',
    },
  },
};
