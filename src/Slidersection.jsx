import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const images = [
  "https://www.apple.com/uk/tv-pr/shows-and-films/s/see/images/season-03/show-home-graphic-header/key-art-01/4x1/Apple_TV_See_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1730877086966",
  "https://preview.redd.it/all-the-new-posters-and-banners-form-the-apple-tv-site-v0-7ioclgvyu5wa1.jpg?width=640&crop=smart&auto=webp&s=5dd81c313590c71221573489b68af49e0d38dc91",
  "https://www.apple.com/tv-pr/articles/2024/02/apple-tv-unveils-a-sneak-peek-at-star-studded-lineup-of-new-and-returning-original-series-set-to-debut-in-2024/images/big-image/big-image-01/020524_Apple_Sneak_Peak_Original_Series_Big_Image_01_big_image_post.jpg.large.jpg",
  "https://www.apple.com/tv-pr/shows-and-films/n/now-and-then/images/season-01/show-home-graphic-header/key-art-01/4x1/Apple_TV_Now_And_Then_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1730773712316",
  "https://www.apple.com/newsroom/images/product/apple-tv-plus/lifestyle-/Apple_tv_plus-the-morning-show-cover-art-09102019_big.jpg.large.jpg",
  "https://www.apple.com/tv-pr/shows-and-films/f/foundation/images/season-03/show-home-graphic-header/key-art-02/4x1/Apple_TV_Foundation_key_art_graphic_header_4_1_show_home.jpg.large.jpg",
];

const Slidersection = () => (
  <div className="w-full max-w-8xl mx-auto">
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      className="relative"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black/5 flex items-center justify-center space-x-4 p-4">
            
<p className="text-white font-bold" >Watch on Apple tv+</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Slidersection;
