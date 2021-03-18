import React from 'react';
import { Layout } from 'antd';
import './FooterPage.less';

const { Footer } = Layout;

export const FooterPage = () => {
	return (
		<Footer className="footerPage text-center py-2">
			<span>Copyright</span>
		</Footer>
	)
}
