/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, Input, Row, Col } from 'antd';

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const AppLayout = ({ children }) => {
	const [isLoggedIn, setLoggedIn] = useState(false);

	return (
		<div>
			<Menu mode='horizontal'>
				<Menu.Item>
					<Link href="/"><a>노드버드</a></Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/profile"><a>프로필</a></Link>
				</Menu.Item>
				<Menu.Item>
					<Input.Search style={{ verticalAlign: "middle" }} /><Link href="/signup"><a>회원가입</a></Link>
				</Menu.Item>
			</Menu>
			<Row gutter={8}>
				<Col xs={24} md={6}>
					{isLoggedIn ? <UserProfile /> : <LoginForm />}
				</Col>
				<Col xs={24} md={12}>
					{children}
				</Col>
				<Col xs={24} md={6}>
					<a href='https://shinhyogeun.tistory.com' target="_blank" rel="noreferrer noopener">Made by shinhyogeun</a>
				</Col>
			</Row>
		</div>
	)
};

AppLayout.PropTypes = {
	children: PropTypes.node.isRequired,
};

export default AppLayout;