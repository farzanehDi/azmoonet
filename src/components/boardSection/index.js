import React from 'react';
import styled from "styled-components";
import BoardImgDesktop from "../../assets/images/board.png";
import BoardImgMobile from "../../assets/images/board-mobile.png";

const BoardSection = () => {

    const BoardContainer = styled.section`
      background: #fcc91b;
      background: linear-gradient(0deg, #fcc91b 0%, #f7b121 100%);
    `;

    const Board = styled.div`
      min-height: 360px;
      background-image: url(${BoardImgDesktop});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      h1 {font-size: 23px}

      p {margin-top: 15px}

      p, h1 {max-width: 338px;margin-right: 13px;}

      @media only screen and (max-width: 630px) {
        min-height: 415px;
        background-image: url(${BoardImgMobile});
        h1 {
          font-size: 15px
        }

        p {
          margin-top: 5px
        }

        p, h1 {
          max-width: 155px;
          margin-right: 0;
        }
      }
    `;

    return (

            <BoardContainer className={`py-4`}>
                <Board className={`container flex flex-col items-center sm:pt-20 pt-32 text-light`}>
                    <h1 className={'opacity-80 font-bold text-right w-full'}>آزمونت با آزمونت</h1>
                    <p className={'text-justify text-xs'}>
                        آزمونت یک پلتفرم آموزشی هوشمند نوین می باشد که با اتکا به دانش هوش مصنوعی همگام با دانش آموز پیش
                        می
                        رود و برنامه مناسب درسی را نیز تدوین می کند.
                    </p>
                </Board>
            </BoardContainer>

    );
};

export default BoardSection;