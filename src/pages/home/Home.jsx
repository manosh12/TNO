import {useEffect} from "react";
import homeImg from '/images/main.jpg';
import { Title } from "../../components/Title.jsx";
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import {Link, useLocation} from "react-router-dom";
import data from "../../data/data.json";
import '../../App.css';
import {Contact} from "../../components/Contact.jsx";

export const Home = () => {
  const businessContent = data.businessContent;
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1);
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* MAIN CONTENTS */}
      <div className="home">
        {/* Background Section */}
        <div
          className="relative bg-fixed flex flex-col justify-center items-center w-full lg:h-[70vh] h-[50vh] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 3, 3, 0.5)), url("${homeImg}")`,
          }}
        >
          <div className="text-center font-serif">
            <h1 className="text-2xl text-white text-left" style={{letterSpacing: '0.6em'}}>次こそはもっと</h1>
            <h1 className="text-2xl text-white my-3 text-left" style={{letterSpacing: '0.6em'}}>次こそは自分</h1>
            <h1 className="text-2xl text-white text-left" style={{letterSpacing: '0.6em'}}>次こそは決める</h1>
          </div>
        </div>

        {/* Greeting Section */}
        <div className="container mx-auto max-w-5xl lg:my-10 rounded-[5px] pt-7" id="intro">
          <Title title="ご挨拶"/>
          <div className="grid sm:grid-cols-2 gap-20 mx-5 lg:mt-20">
            <div className="mx-2">
              <h4 className="text-2xl font-bold">MESSAGE</h4>
              <p className="text-sm text-warning-500">CEOメッセージ</p>
              <div className="lg:mt-5 mt-2">
                <h1 className="text-xl text-justify">
                  私共、は課題を抱えている個人から企業に至るまで皆様方の様々な依頼を受け専門家としてその解決に向けたサポート事業を主に行っています。
                  <p className="lg:my-3 my-2">個人・業界又分野によって課題は異なりますが依頼されている問題を細分化しそれに対する改善策をチームで提案を行い実施し解決していきます。</p>
                  <p className="lg:my-3 my-2">チームが一つになってサポートして行きますので是非問題解決に向けた外部資源の活用をご利用ください。</p>
                  <p>皆様方の笑顔から全てが始まります次の誰かのために笑顔を繋ぎます今日も一日良い日になりますように</p>
                  <p className="lg:mt-5 mt-2 text-xl float-end lg:float-start">代表取締役 丹野 敬栄</p>
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/images/team.png" className="lg:w-[400px] lg:h-[400px] lg:mt-10 w-[300px] h-[300px]"/>
            </div>
          </div>
        </div>

        {/* Business Content Section */}
        <div className="bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 py-2 mt-10">
          <div className="container mx-auto max-w-7xl lg:my-10 my-5 rounded-[5px] pt-7">
            <h1 className="text-3xl text-center text-white">The Next One 業務内容</h1>
            <p className="text-center mt-3 text-white mx-5 text-xl">皆様方の笑顔から全てが始まります次の誰かのために笑顔を繋ぎます今日も一日良い日になりますように</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mx-5 mt-10 items-center">
              {businessContent.map((contentList, index) => (
                <Link to={`/business-content#${contentList.number}`} key={index}>
                  <Card className="py-6 shadow-2xl rounded-md transition-transform duration-300 hover:-translate-y-2">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <img src={contentList.img}
                           className="w-10 h-10 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
                           alt={contentList.title}/>
                    </CardHeader>
                    <CardBody className="text-center py-2">
                      <h4 className="text-md pt-2">{contentList.title}</h4>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* TheNextOne の理念 */}
        <div className="container mx-auto max-w-5xl lg:my-10 rounded-[5px] pt-7">
          <Title title="TheNextOneの理念"/>
          <div className="mx-5">
            <p className="text-xl font-bold text-justify">
              現状に満足する事なく明日への自分を信じて次の一歩をふみ出し新たな出会いを求めて
              変化する日々の流れにも負けずに 次は必ずある昨日より明日今日より明日へと
              向上心を持ち未来へ向かって多くの人達を笑顔にする事が私達チームの社会貢献であり理念です
            </p>
            <div className="mt-7">
              <h4 className="text-xl text-warning-500 font-bold">喜劇王チャップリン</h4>
              <p className="mt-3"> ある記者から貴方の最高傑作はと聞かれ <span className="text-xl">「<span className="font-bold">The Next One</span>」</span>(次の作品)と答えたそうです</p>
            </div>
            <div className="mt-7">
              <h4 className="text-warning-500 font-bold">経営学者ドラッカー</h4>
              <p className="mt-3"> 今まで書いた数十冊の本の中でどの本が一番良い と思いますかと聞かれ <span className="text-xl">「<span className="font-bold">The Next One</span>」</span>(次の作品)と答えたそうです
              </p>
            </div>
            <div className="mt-20">
              <h4 className="font-bold text-xl my-3">ソリューションの提案から実行まで</h4>
              <div className="mt-5 flex justify-start">
                <img src="/images/circle.png" alt="circle" className="w-6 h-6"/>
                <p className="ml-3">依頼・相談</p>
              </div>
              <div className="mt-5 flex justify-start">
                <img src="/images/circle.png" alt="circle" className="w-6 h-6"/>
                <p className="ml-3">ヒアリング現状把握</p>
              </div>
              <div className="mt-5 flex justify-start">
                <img src="/images/circle.png" alt="circle" className="w-6 h-6"/>
                <p className="ml-3">リサーチ</p>
              </div>
              <div className="mt-5 flex justify-start">
                <img src="/images/circle.png" alt="circle" className="w-6 h-6"/>
                <p className="ml-3">詳細ヒアリング</p>
              </div>
              <div className="mt-5 flex justify-start">
                <img src="/images/circle.png" alt="circle" className="w-6 h-6"/>
                <p className="ml-3">解決向けた内容の提案</p>
              </div>
              <div className="mt-5 flex justify-start">
                <img src="/images/circle.png" alt="circle" className="w-6 h-6"/>
                <p className="ml-3">契約</p>
              </div>
            </div>
          </div>

          {/* お問い合わせ */}
          <Contact />
        </div>
      </div>
    </>
  );
};
