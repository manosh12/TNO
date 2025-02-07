import homeImg from '/images/company.jpg';
import {Title} from "../../components/Title.jsx";
import './CompanyInfo.css';
import {Card} from "@nextui-org/react";

export const CompanyInfo = () => {
  return(
    <>
      <div className="home">
        <div
          className={`relative bg-fixed flex flex-col justify-center items-center w-full h-[50vh] bg-cover bg-no-repeat`}
          style={{
            'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${homeImg}")`,
          }}
        >
          <div className="text-center font-serif">
            <h1 className="text-3xl text-white">会社概要</h1>
            <span className="text-sm text-warning">(Company)</span>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl rounded-[5px] mb-20">
          <Title title="経営理念"/>
          <div className="mx-5 text-xl">
            現状に満足する事なく明日への自分を信じて次の一歩をふみ出し新たな出会いを求めて変化する日々の流れにも負けずに次は必ずある昨日より明日今日より明日へと向上心を持ち未来へ向かって多くの人達を笑顔にする事が私達チームの社会貢献であり理念です。
          </div>

          {/*COMPANY INFO(会社概要)*/}
          <div className="lg:my-20">
            <Title title="会社概要"/>
            <div className="mx-4">
              <table className="tb-01 lg:mb-10 w-full">
                <tbody>
                <tr className="text-xl">
                  <th className="py-5 font-bold text-xl">社名</th>
                  <td>ＴＮＯソリューション株式会社</td>
                </tr>
                <tr className="text-xl">
                  <th className="py-5 font-bold text-xl">設立</th>
                  <td>2022年06月20日</td>
                </tr>
                <tr className="text-xl">
                  <th className="py-5 font-bold text-xl">代表者</th>
                  <td>丹野 敬栄</td>
                </tr>
                <tr className="text-xl">
                  <th className="py-5 font-bold text-xl">法人番号</th>
                  <td>7290001097934</td>
                </tr>
                <tr className="text-xl">
                  <th className="py-5 font-bold text-xl">郵便番号</th>
                  <td>〒812-0011</td>
                </tr>
                <tr className="text-xl">
                  <th className="py-5 font-bold text-xl">本社住所</th>
                  <td>福岡市博多区博多駅前４丁目１８-１９ 博多フロントビル２０５</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/*company address (業務場所）*/}
          <Card className="py-8 mt-6 shadow-lg mx-4" radius="sm">
            <Title title="事業所案内"/>
            <div className="grid sm:grid-cols-2 gap-20 mx-5 lg:mt-10">
              <div className="mx-2">
               <h4 className="font-bold text-2xl">福岡本社</h4>
                <div className="mt-5">
                  <p className="font-bold text-2xl">所在地</p>
                  <p className="mt-3 text-lg">〒812-0011</p>
                  <p className="my-1 text-lg">福岡市博多区博多駅前４丁目１８-１９ 博多フロントビル２０５</p>
                  <p className='text-lg mt-2'>TEL : 092-409-8609</p>
                  <p className='text-lg'>携帯 : 080-3155-1540</p>
                  <p className='text-lg'>FAX : 092-089-8612</p>
                  <div className="mt-7">
                    <p className="font-bold text-2xl">アクセス</p>
                    <p className='text-lg'>博多駅より徒歩５分</p>
                  </div>
                </div>
              </div>

              {/*google map*/}
              <div className="mx-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.807990769973!2d130.41712017637408!3d33.58433427333673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191ba23283aa3%3A0x3101cbb7df71e738!2z44CSODEyLTAwMTEgRnVrdW9rYSwgSGFrYXRhIFdhcmQsIEhha2F0YSBFa2ltYWUsIDQtY2jFjW1l4oiSMTjiiJIxOSDljZrlpJrjg5Xjg63jg7Pjg4jjg5Pjg6s!5e0!3m2!1sen!2sjp!4v1718151948862!5m2!1sen!2sjp"
                  allowFullScreen=""
                  loading="lazy"
                  aria-hidden="false"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  style={{'height':'300px'}}
                ></iframe>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}