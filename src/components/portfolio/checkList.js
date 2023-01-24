import React from 'react';
import { observer } from 'mobx-react';

const CheckList = observer(() => {
    const images = [
        {
            url: "img/checkStudent01.png",
        },
        {
            url: "img/checkStudent02.png",
        },
        {
            url: "img/checkStudent03.png",
        },
    ];

    return <div className='landscape'>
        <div className='sVisual'>
            <div className='inConts'>
                <h2>
                    <span>포트폴리오</span>
                </h2>
            </div>
        </div>
        <div className='portfolioDetail'>
            <div className='inConts'>
                <div className='detailView'>
                    <div className='detailName'>
                        <div className='maintitle'>출석체크</div>
                        <div className='subTitle'>Student CheckList</div>
                    </div>
                    <div className='detailImg'>
                        {images.map((item, idx) => {
                            return <img src={item.url} alt={item.url} key={idx} />
                        })}

                    </div>
                    <div className='detailText'>
                        {`
              react 를 이용하여 학생 출석체크 페이지를 만들었습니다.
              학교에서 선생님들이 개인적으로 활용 할 수 있도록 해야해서 서버는 작업하지않고 프론트에서만 가능하도록 작업했습니다.
              코로나 사태로 인해 학생들의 출석체크를 인터넷 페이지에서 댓글을 하나씩 확인해야한다고 해서 작업하게되었습니다.
              우선 출석번호와 이름으로 작성한 엑셀파일을 첨부한 뒤 출석체크할 반을 정합니다.
              학생들이 출석댓글을 다는 페이지 전체를 복사하여 아래 텍스트필드에 붙여넣고 출석체크 버튼을 클릭하면 일치하는 학생들이름을 모두 조회합니다.
              실제 중학교에 베포하여 선생님들이 활용했습니다.
              `}
                    </div>
                </div>
            </div>
        </div>
    </div>
        ;
});

export default CheckList;
