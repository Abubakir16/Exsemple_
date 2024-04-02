import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swip.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Swip() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://carwow-uk-wp-3.imgix.net/P90462492_highRes_the-new-bmw-3-series-scaled-e1668530064634.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bmw-infinitycars.in/sites/default/files/2023-05/1680x756_6_0.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/audi-a3-sportback-5-1583238930.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.topgear.com/sites/default/files/cars-car/carousel/2020/08/audiuk00026938.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s1.cdn.autoevolution.com/images/news/mercedes-glc-coupe-enhances-compact-cuv-lifestyle-with-standard-mhev-amg-line-211811-7.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s1.1zoom.me/big7/154/Mercedes-Benz_White_Metallic_Coupe_Crossover_573686_2560x1706.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://s1.cdn.autoevolution.com/images/news/gallery/mercedes-benz-glc-coupe-enhances-compact-cuv-lifestyle-with-standard-amg-line_1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bmw.kg/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/highlights/bmw-3-series-cs-m-automobiles-sp-desktop.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://avatars.mds.yandex.net/get-verba/1540742/2a00000178874741ebe297e8ba6c4145a1c7/cattouch"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
