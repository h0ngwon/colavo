import dayjs from "dayjs";
import "dayjs/locale/ko";
import "../../styles/Header.css";

dayjs.locale("ko");

interface Props {
  title: string;
  showDate?: boolean;
}

const HeaderContent = ({ title, showDate = false }: Props) => {
  const formattedDate = dayjs().format("YYYY-MM-DD A hh:mm");
  return (
    <>
      {showDate ? (
        <>
          <div className="default-header-content">
            <div className="default-header-content-title">{title}</div>
            <div className="default-header-content-date">{formattedDate}</div>
          </div>
        </>
      ) : (
        <div>
          <div className="header-content-title">{title}</div>
        </div>
      )}
    </>
  );
};

export default HeaderContent;
