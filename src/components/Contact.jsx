import { Title } from "./Title.jsx";
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import data from "../data/data.json"

export const Contact = () => {
  const contactData = data.contact;

  return (
    <>
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
          <div className="lg:mt-20 mt-5">
            <p> サービスのお問い合わせは下記のフォームをご利用願います。なお、お問い合わせいただいた内容によっては、
              ご連絡までお時間がかかるものがございます。あらかじめご了承ください。
              また、電話でのお問い合わせも承っておりますので、本社までご連絡ください。
            </p>
          </div>
          <Card className="text-center lg:my-10 lg:py-10 my-2 py-7 shadow-lg" radius="sm">
            <div className="text-xl font-bold mb-4">【各種お問い合わせ先】</div>
            <h1 className="mt-5 text-md lg:mx-40 mx-5">〒812-0011 福岡市博多区駅前４丁目
              18-19博多フロントビル2階205号</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 mx-5 mt-20 items-center lg:mx-20">
              {contactData.map((contentList, index) => (
                <Card className="py-6 shadow-2xl rounded-md transition-transform duration-300 hover:-translate-y-2"
                      key={index}>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <div className="relative">
                      <div
                        className="w-16 h-16 border-2 border-gray-300 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-2xl">
                        <img src={contentList.img}
                             className="w-full h-full object-cover transition-transform duration-300 rounded-full"
                             alt={contentList.title}/>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className="text-center py-2">
                    <h4 className="font-bold text-xl pt-2">{contentList.title}</h4>
                    <h4 className="text-md pt-4">{contentList.content}</h4>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
