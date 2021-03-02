import React from 'react'
import { Link } from 'react-router-dom';
function RegisterPage() {
  return (
    <div className='auth-wrapper' style={{ textAlign: "center" }}>
      <div>
        <h3>Register</h3>
      </div>
      <form >
        <label>가입하실 이메일을 입력해주세요.</label>
        <input name="email" type="email" defaultValue="test" />
        <label>이름</label>
        <input name="name" defaultValue="test" />
        <label>비밀번호</label>
        <input name="password" type="password" defaultValue="test" />
        <label>비밀번호 확인</label>
        <input name="password_confirm" type="password" defaultValue="test" />
        <label>ExampleRequired</label>
        <input type="submit" />
        <Link style={{ color: 'gray', textDecoration: "none" }} to="/login">이미 아이디가 있다면..?</Link>
      </form>
    </div >
  )
}

export default RegisterPage
