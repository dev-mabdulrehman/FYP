import React, { Component } from "react";
import { Button, Collapse, Fade } from "reactstrap";

export class ChatBox extends Component {
	state = {
		chatOpen: false,
	};
	render() {
		return (
			<>
				{this.props.chat && (
					<div
						style={{
							position: "fixed",
							maxWidth: "320px",
							backgroundColor: "pink",
							right: "20px",
							bottom: "0px",
							width: "100%",
							borderTopLeftRadius: "5px",
							borderTopRightRadius: "5px",
						}}
					>
						<div
							className="chat-header d-flex align-items-center"
							style={{
								height: "50px",
								boxSizing: "border-box",
								padding: "0 20px",
								cursor: "pointer",
							}}
							onClick={() => this.setState({ chatOpen: !this.state.chatOpen })}
						>
							<span>Name</span>
							<Button
								close
								className="ml-auto"
								onClick={() => this.props.changeHandle()}
							/>
						</div>
						<Collapse isOpen={this.state.chatOpen}>
							<div
								className="chat-body"
								style={{ height: "350px", backgroundColor: "red" }}
							></div>
						</Collapse>
					</div>
				)}
			</>
		);
	}
}

export default ChatBox;
