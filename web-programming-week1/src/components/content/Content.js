import React from "react";
import './Content.css';
export default function Content() {
    return (
        <div className="content">
            <div className="image-container">
                <img className="image-main"
                    src="https://image.thanhnien.vn/w1024/Uploaded/2022/ujwyqdxwp/2022_03_02/ha-noi-fc-phong-thay-do-3800.jpg" alt="Img" />
                <div className="overlay">
                    <h1>THÀNH LẬP</h1>
                    Dưới sự tài trợ của Tập đoàn T&T, câu lạc bộ Hà Nội – T&T <br></br>
                    thành lập vào ngày 18 tháng 6 năm 2006. 03 mùa giải đầu tiên, <br></br>
                    từ một đội bóng gồm đa số các cầu thủ trẻ do huấn luyện viên <br></br>
                    Triệu Quang Hà (cựu cầu thủ đội tuyển bóng đá Việt Nam và câu lạc bộ Thể Công) <br></br>
                    dẫn dắt đã liên tiếp thăng ba hạng, từ hạng Ba lên hạng chuyên nghiệp, <br></br>
                    giành quyền thi đấu ở đấu trường danh giá nhất Việt Nam V-League 2009.<br></br>
                </div>
            </div>
            <div className="image-container">
                <img className="image-main"
                    src="https://nld.mediacdn.vn/2018/10/8/dsc08924-15389761826841882436914.jpg" alt="Img" />
                <div className="overlay">
                    <h1>SVĐ HÀNG ĐẪY</h1>
                    Sân vận động Hàng Đẫy được xây dựng từ năm 1937, ban đầu chỉ là bãi đất trống <br></br>
                    với diện tích khiêm tốn. Đến ngày 24/8/1958, khu vực này được cải tạo xây dựng <br></br>
                    và khánh thành sau 01 năm xây dựng, diện tích 21.844 m2. Năm 1995, sân vận động <br></br>
                    được cải tạo thêm lần nữa và có diện mạo như ngày nay. <br></br>
                    Sân vận động có sức chứa 20.000 chỗ ngồi. <br></br>
                </div>
            </div>
            <div className="image-container">
                <img className="image-main"
                    src="https://cdnimg.vietnamplus.vn/uploaded/zgnokt/2020_09_20/vnp_hnvsvt20208_1.jpg" alt="Img" />
                <div className="overlay">
                    <h1>DANH HIỆU</h1>
                    <h2>V.League 1</h2><br></br>
                    Vô địch (5): 2010, 2013, 2016, 2018, 2019<br></br>
                    Hạng nhì (5): 2011, 2012, 2014, 2015, 2020<br></br>

                    <h2>Cúp Quốc Gia</h2><br></br>
                    Vô địch (2): 2019, 2020<br></br>
                    Hạng nhì (3): 2012, 2015, 2016<br></br>

                    <h2>Siêu Cúp Quốc Gia</h2><br></br>
                    Vô địch (4): 2010, 2018, 2019, 2020<br></br>
                    Hạng nhì (3): 2013, 2015, 2016<br></br>
                </div>
            </div>

        </div>
    )
}