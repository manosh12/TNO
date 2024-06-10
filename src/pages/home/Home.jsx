
import homeImg from '/images/company.jpg'
import {Title} from "../../components/Title.jsx";
import {Footer} from "../../components/Footer.jsx";

export const Home = ()  =>{

  return (
    <>
      {/* MAIN CONTENTS */}
      <div className="home">
        <div
          className={`relative bg-fixed flex flex-col justify-center items-center w-full h-[70vh] bg-cover bg-no-repeat}`}
          style={{
            'backgroundImage': `linear-gradient(rgba(16, 0, 0, 0.7), rgba(3, 3, 3, 0.7)), url("${homeImg}")`,
          }}
        >
          <div className="text-center font-serif">
            <h1 className="text-2xl text-white text-left" style={{letterSpacing: '0.6em'}}>次こそはもっと</h1>
            <h1 className="text-2xl text-white my-3 text-left" style={{letterSpacing: '0.6em'}}>次こそは自分</h1>
            <h1 className="text-2xl text-white text-left" style={{letterSpacing: '0.6em'}}>次こそは決める</h1>
          </div>
        </div>

        {/*  GREETING CONTENTS (ご挨拶)*/}
        <div className="container mx-auto max-w-5xl my-10 rounded-[5px] pt-7">
          <Title title="ご挨拶"/>
          <div className="grid sm:grid-cols-2 gap-5 mx-3 mt-20">
            <div className="mx-2">
              <h4 className="text-3xl"> MESSAGE</h4>
              <p className="text-sm py-2 text-warning-500">CEOメッセージ</p>
              <div className="mt-5">
                <h1 className="text-md text-gray-600">
                  私共、<span className="text-warning font-bold text-2xl">Team Next One</span> は課題を抱えている
                  個人から企業に至るまで皆様方の様々な依頼 を受け専門家としてその解決に向けたサポート 事業を主に行っています

                  <p className="mt-5">個人・業界又分野によって課題は異なりますが 依頼されている問題を細分化しそれに対する
                    改善策をチームで提案を行い実施し解決していきます</p>

                  <p className="my-5"> チームが一つになってサポートして行きます ので是非問題解決に向けた外部資源の活用を
                    ご利用ください </p>
                  <p>皆様方の笑顔から全てが始まります次の誰かのために笑顔を繋ぎます今日も一日良い日になりますように</p>

                  <p className="mt-10 text-sm">
                    代表取締役 山田　太郎
                  </p>
                </h1>
              </div>
            </div>
            <div>
              <img src="/images/greeting.jpg" className="w-full h-[500px] rounded-md shadow-lg"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
