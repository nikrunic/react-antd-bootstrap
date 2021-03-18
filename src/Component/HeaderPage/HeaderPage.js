import React from 'react';
import { Layout } from 'antd';
import './HeaderPage.less';

const { Header } = Layout;

export const HeaderPage = () => {
	return (
		<Header className="headerPage d-flex flex-column justify-content-center">
			<div className="container">
				<div className="d-flex flex-row align-items-center justify-content-center">
					<div className="centerSide loginLink">
						<img src={require("../../Assets/img/SanAttest_Logo.png")} alt="" />
					</div>
				</div>
			</div>
		</Header>
	)
}