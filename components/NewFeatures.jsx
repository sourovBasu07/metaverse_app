import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="sm:max-w-[250px] min-w-[210px] flex flex-col flex-1">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] bg-[#323F5D] rounded-[24px]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="font-bold text-[24px] leading-[30.24px] text-white mt-[26px]">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
