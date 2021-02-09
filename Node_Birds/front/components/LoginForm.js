import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "next";
const LoginForm = () => {
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Form>
			<div>
				<label htmlFor="user-id">아이디</label>
				<br />
				<Input name="user-id" value={id} onChange={onChangeId} required />
			</div>
			<div>
				<label htmlFor="user-password">비밀번호</label>
				<br />
				<Input
					name="user-password"
					type="password"
					value={password}
					onChange={onChangePassword}
					required
				/>
			</div>
			<div>
				<Button type="primary" htmlType="submit" loading={false}>로그인</Button>
				<Link href="/signup"><a>가입하기</a></Link>
			</div>
		</Form>
	);
}

export default LoginForm