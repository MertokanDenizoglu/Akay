import React from "react";

import styles from "./styles.module.css";


export default function HomeServices() {
  return (
    <div className={styles.container}>
      {array.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <div className={styles.flip_card}>
              <div className={styles.flip_card_inner}>
                <div className={styles.flip_card_front}>
                 
                  <p>{item.title}</p>
                </div>
                <div className={styles.flip_card_back}>
                  <p>{item.title}</p>
                  <span>{item.description}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const array = [
  {
    title: "Av. Serdar DEĞİRMENCİ",
    description:
      "Her türlü özel hukuk davasının hazırlık ve takibini özenle sağlamaktayız.Şirketlerin hukuki hizmet ihtiyaçlarını bütüncül olarak karşılamaktayızŞirketlerin hukuki hizmet ihtiyaçlarını bütüncül olarak karşılamaktayız",
    
  },
  {
    title: "Av. Galip KARAMAN",
    description:
      "Ceza hukuku davalarının hazırlık ve takibini özenle sağlamaktayız.Şirketlerin hukuki hizmet ihtiyaçlarını bütüncül olarak karşılamaktayızŞirketlerin hukuki hizmet ihtiyaçlarını bütüncül olarak karşılamaktayız",
   
  },
  {
    title: "Av. Mert Okan DENİZOĞLU",
    description:
      "Şirketlerin hukuki hizmet ihtiyaçlarını bütüncül olarak karşılamaktayız.Şirketlerin hukuki hizmet ihtiyaçlarını bütüncül olarak karşılamaktayızŞirketlerin hukuki hizmet ihtiyaçlarını bütüncül olarak karşılamaktayız",
    
  },
 
];
