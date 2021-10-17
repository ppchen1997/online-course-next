import React from 'react';
import { Box, Container } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import BlockTitle from 'components/block-title';

const accordionData = [
  {
    isExpanded: false,
    title: '什麼是2021零元挑戰? ?',
    contents: (
      <div>
        Hulk-lab團隊聆聽各方用戶回饋後，為提供更好的學習體驗，

        將於新的一年調整零元挑戰，讓大家能更輕鬆養成學口說的習慣！



        因應本次調整，購課即參加零元挑戰，只開放到 2022/1/6（三）23:59 ！

        於2022/1/6（三）23:59 前完成結帳並未申請退費者，才享有挑戰資格，

        詳細內容請參閱『全新零元挑戰』常見問題集。
      </div>
    ),
  },
  {
    isExpanded: true,
    title: '我想知道上課方式?',
    contents: (
      <div>
        Hulk Lab是一套數位化的中文口說學習課程，非線上真人老師一對一課程。
        課程以熱門時事作為課程題材，搭配口說練習模板和習題設計成的多元題型。

        AI智慧評分系統自動依據您的口說狀況給予分數與評語
        ，並按照您的學習狀況即時調整課程難度，推薦適合你的個人化學習內容，
        課程系統會按照您的答題的正確率來判定是否適合提高下一堂課程等級。
      </div>
    ),
  },
  {
    isExpanded: false,
    title: '我要怎麼掌握我的學習狀況？',
    contents: (
      <div>
        在會員資料之處有紀錄您的學習數據，可以在裡面看到學習時數、學習成果、以及連續學習天數等等的狀態。也可以在行事曆查看曾經上過的課程以及安排未來上課的日程。
      </div>
    ),
  },
  {
    isExpanded: false,
    title: '有沒有學習時間限制？',
    contents: (
      <div>
        課程在使用期限內，上課時間可由您自由安排，24 小時隨時隨地皆可以上課。
        即使未完成一堂課，您也可以隨時暫停，之後再點選「繼續課程」，即可從您上次中斷的地方繼續上課。
.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="Frequent Question"
          heading="常見問答集"
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    container: {
      maxWidth: '900px',
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: 'center',
    },
  },
};
