import React from 'react'
import styled from 'styled-components'

const HalfDiv = styled.div`
  display: inline-block;
  width: 50%;
`

const BoldText = styled.span`
  font-weight: bold;
  display: block;
  text-align: center;
  line-height: 1.5;
`


class Form extends React.Component {
  render() {
    const { tenthanh, hoten, diem, diemdanh } = this.props
    console.log(diem)
    document.title = ` ${tenthanh} ${hoten}`
    return (
      <div style={{ display: 'inline-block', width: '700px', padding: '20px' }}>
        <div>
          <HalfDiv>
            <BoldText>Giáo phận Tp. Hồ Chí Minh</BoldText>
            <BoldText>Giáo hạt Phú Thọ</BoldText>
            <BoldText>Giáo xứ Phú Bình</BoldText>
          </HalfDiv>
          <HalfDiv>
            <BoldText>Liên đoàn TNTT Anrê Phú Yên</BoldText>
            <BoldText>Hiệp đoàn Mân Côi</BoldText>
            <BoldText>Xứ đoàn Têrêsa Hài Đồng Giêsu</BoldText>
          </HalfDiv>
        </div>
        <p></p>
        <BoldText>PHIẾU LIÊN LẠC</BoldText>
        <BoldText>ẤU 3 – HK1 Năm học 2019-2020</BoldText>
        <p></p>
        <BoldText>Kính gửi phụ huynh em:  
          <span>
            {
              ` ${tenthanh} ${hoten}`
            }
          </span>
        </BoldText>
        <p style={{lineHeight: 1.5}}>
          <span style={{display: 'inline-block', width: '20px'}}></span>{`  Để quý phụ huynh nắm bắt tình hình học tập cũng như chuyên cần của các em và để quý phụ huynh có thể nhắc nhở và giúp các em học tốt hơn, lớp Ấu 3 gửi quý phụ huynh bảng điểm cũng như điểm danh học kì 1. Nếu có phản hồi hoặc góp ý, xin ghi vào phần ý kiến phụ huynh. Phụ huynh kí tên xác nhận và nộp lại cho các anh chị.`}
        </p>
        <p></p>
        <BoldText>Bảng điểm</BoldText>

        <table style={{width: '100%'}}>
          <thead>
          <tr>
            <th></th>
            <th>KT Miệng</th>
            <th>KT 15'</th>
            <th>KT 15'</th>
            <th>KT 1 tiết</th>
            <th>Thi HK1</th>
            <th>TB</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Điểm</td>
            <td>{diem.ktm}</td>
            <td>{diem.kt15_1}</td>
            <td>{diem.kt15_2}</td>
            <td>{diem.kt1t}</td>
            <td>{diem.thi}</td>
            <td>{diem.tb}</td>
          </tr>
          </tbody>
        </table>

        <p></p>
        <BoldText>Điểm danh</BoldText>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th></th>
              <th>Thứ năm</th>
              <th>Chúa Nhật</th>
              <th>Tổng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hiện diện</td>
              <td>{diemdanh.hdt5}</td>
              <td>{diemdanh.hdcn}</td>
              <td>{diemdanh.hdt5+diemdanh.hdcn}</td>
            </tr>
            <tr>
              <td>Có phép</td>
              <td>{10 - diemdanh.kpt5 - diemdanh.hdt5}</td>
              <td>{8 - diemdanh.kpcn - diemdanh.hdcn}</td>
              <td>{10 - diemdanh.kpt5 - diemdanh.hdt5 + 8 - diemdanh.kpcn - diemdanh.hdcn}</td>
            </tr>
            <tr>
              <td>Không phép</td>
              <td>{diemdanh.kpt5}</td>
              <td>{diemdanh.kpcn}</td>
              <td>{diemdanh.kpt5 + diemdanh.kpcn}</td>
            </tr>
          </tbody>
        </table>

        <p></p>
        <p style={{fontWeight: 'bold'}}>Ý kiến của phụ huynh:</p>
        <p style={{overflowWrap: 'break-word', lineHeight: 2}}>.................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................</p>
      
        <p></p>
        <div>
          <HalfDiv>
            <BoldText>Chi đoàn trưởng</BoldText>
          </HalfDiv>
          <HalfDiv>
            <BoldText>PH kí tên xác nhận</BoldText>
          </HalfDiv>
        </div>
        <div style={{marginTop: '100px'}}>
          <HalfDiv>
            <BoldText>Nguyễn Ngọc Minh Huy</BoldText>
          </HalfDiv>
          <HalfDiv>
          </HalfDiv>
        </div>
        <p style={{fontSize: 12, marginTop: 10}}>* Lưu ý: Phụ huynh vui lòng liên lạc qua số điện thoại mới <span style={{fontWeight: 'bold'}}>096 247 6892</span> (Minh Huy)</p>
      </div>
    )
  }
}

export default Form