import {useEffect} from "react";
import homeImg from '/images/company.jpg';
import { Title } from "../../components/Title.jsx";
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import {Link, useLocation} from "react-router-dom";
import data from "../../data/data.json";
import '../../App.css';
import {FaFacebookSquare, FaFax, FaInstagram, FaMailBulk, FaTwitter} from "react-icons/fa";
import {FaPhoneFlip} from "react-icons/fa6";

export const Home = () => {
  const businessContent = data.businessContent;

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the '#' from the hash
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
          className="relative bg-fixed flex flex-col justify-center items-center w-full h-[70vh] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 0, 0, 0.5), rgba(3, 3, 3, 0.5)), url("${homeImg}")`,
          }}
        >
          <div className="text-center font-serif">
            <h1 className="text-2xl text-white text-left" style={{letterSpacing: '0.6em'}}>次こそはもっと</h1>
            <h1 className="text-2xl text-white my-3 text-left" style={{letterSpacing: '0.6em'}}>次こそは自分</h1>
            <h1 className="text-2xl text-white text-left" style={{letterSpacing: '0.6em'}}>次こそは決める</h1>
          </div>
        </div>

        {/* Greeting Section */}
        <div className="container mx-auto max-w-5xl my-10 rounded-[5px] pt-7" id="intro">
          <Title title="ご挨拶"/>
          <div className="grid sm:grid-cols-2 gap-20 mx-5 mt-20">
            <div className="mx-2">
              <h4 className="text-2xl font-bold">MESSAGE</h4>
              <p className="text-sm py-2 text-warning-500">CEOメッセージ</p>
              <div className="mt-5">
                <h1 className="text-md text-gray-600">
                  私共、<span className="text-warning font-bold text-2xl">Team Next One </span>
                   は課題を抱えている個人から企業に至るまで皆様方の様々な依頼を受け専門家としてその解決に向けたサポート事業を主に行っています
                  <p className="mt-5">個人・業界又分野によって課題は異なりますが依頼されている問題を細分化しそれに対する改善策をチームで提案を行い実施し解決していきます</p>
                  <p className="my-5">チームが一つになってサポートして行きますので是非問題解決に向けた外部資源の活用をご利用ください</p>
                  <p>皆様方の笑顔から全てが始まります次の誰かのために笑顔を繋ぎます今日も一日良い日になりますように</p>
                  <p className="mt-10 text-sm">代表取締役 山田 太郎</p>
                </h1>
              </div>
            </div>
            <div>
              <img src="/images/team.png" className="w-[350px] h-350px] mt-10"/>
            </div>
          </div>
        </div>

        {/* Business Content Section */}
        <div className="bg-gradient-to-r from-cyan-700 via-sky-900 to-cyan-700 py-2 mt-20">
          <div className="container mx-auto max-w-7xl my-10 rounded-[5px] pt-7">
            <h1 className="text-3xl text-center text-white">Team Next One 業務内容</h1>
            <p className="text-center mt-3 text-white mx-5">皆様方の笑顔から全てが始まります次の誰かのために笑顔を繋ぎます今日も一日良い日になりますように</p>

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
                      <h4 className="font-bold text-sm pt-2">{contentList.title}</h4>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* TeamNextOne の理念 */}
        <div className="container mx-auto max-w-5xl my-10 rounded-[5px] pt-7 text-gray-600">
          <Title title="TeamNextOneの理念"/>
          <div className="lg:mx-10 mx-5">
            現状に満足する事なく明日への自分を信じて次の一歩をふみ出し新たな出会いを求めて
            変化する日々の流れにも負けずに 次は必ずある昨日より明日今日より明日へと
            向上心を持ち未来へ向かって多くの人達を笑顔にする事が私達チームの社会貢献であり理念です

            <div className="mt-7">
              <h4 className="text-xl text-warning-500 font-bold">喜劇王チャップリン</h4>
              <p className="mt-3"> ある記者から貴方の最高傑作はと聞かれ <span className="text-xl">「<span className="text-red-700 font-bold">Team Next One</span>」</span>(次の作品)と答えたそうです</p>
            </div>
            <div className="mt-7">
              <h4 className="text-xl text-warning-500 font-bold">経営学者ドラッカー</h4>
              <p className="mt-3"> 今まで書いた数十冊の本の中でどの本が一番良い と思いますかと聞かれ <span className="text-xl">「<span className="text-red-700 font-bold">Team Next One</span>」</span>(次の作品)と答えたそうです
              </p>
            </div>

            <div className="mt-20 text-gray-600">
              <h4 className="text-xl font-bold my-3">ソリューションの提案から実行まで</h4>
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
          <div id="contact">
            <Title title="お問い合わせ"/>
            <div className="mx-5 my-10">
              <h4 className="text-xl font-bold my-3">個人情報取り扱いについて</h4>
              <div className="mt-5 flex justify-start">
                <img src="/images/circle.png" alt="circle" className="w-6 h-6"/>
                <p className="ml-3">当社が取得した個人情報は法令に準じ目的以外 には一切使用しません</p>
              </div>
              <div className="mt-5 flex justify-start">
                <img src="/images/circle.png" alt="circle" className="w-6 h-6"/>
                <p className="ml-3">有資格者等による定めのある業務については、 有資格者が行います</p>
              </div>
              <div className="mt-20">
                <p> サービスのお問い合わせは下記のフォームをご利用願います。なお、お問い合わせいただいた内容によっては、
                  ご連絡までお時間がかかるものがございます。あらかじめご了承ください。
                  また、電話でのお問い合わせも承っておりますので、本社までご連絡ください。
                </p>
              </div>
              <Card className="text-center my-10 py-10" radius="sm">
                <div className="text-2xl font-bold mb-4">【各種お問い合わせ先】</div>
                <h1 className="mt-5 text-md mx-40">〒812-0011 福岡市博多区駅前４丁目 18-19博多フロントビル2階205号</h1>
                <p className="ml-7 text-md mt-3"><span className="text-red-700 font-bold">TNO</span>ソリューション株式会社（月～金：9：00 ～ 17：00 ※祝祭日を除く）
                </p>
                <div className="text-left mt-5 ml-auto mr-auto max-w-lg">
                  <div className="flex items-center mb-2">
                    <FaPhoneFlip className="mr-2"/> <span className="flex-1">TEL：092（409）8609</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaFax className="mr-2"/> <span className="flex-1">FAX：092-089-8612</span>
                  </div>
                  <div className="flex items-center">
                    <FaMailBulk className="mr-2"/> <span className="flex-1">メール：tnosolution.cc@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-6 lg:mb-0 mb-6">
                  <button
                    className="bg-gray-300 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                    type="button">
                    <FaTwitter className="text-lg"/>
                  </button>
                  <button
                    className="bg-gray-300 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                    type="button">
                    <FaFacebookSquare className="text-lg"/>
                  </button>
                  <button
                    className="bg-gray-300 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                    type="button">
                    <FaInstagram className="text-lg"/>
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
