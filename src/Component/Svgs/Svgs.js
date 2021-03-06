import React from 'react';

export const CustIcon = (props) => {
	const addClassName = props.className === undefined ? '' : props.className;
	const { removeMedia, index } = props;
	switch (props.type) {

		case 'clock':
			return (
				<i className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						fill="currentcolor"
						viewBox="0 0 12.51 12.48">
						<path
							id="Path_2022"
							data-name="Path 2022"
							d="M1.831-10.034a6.027,6.027,0,0,1,4.424-1.831,6.027,6.027,0,0,1,4.424,1.831A6.01,6.01,0,0,1,12.51-5.625a6.01,6.01,0,0,1-1.831,4.409A6.027,6.027,0,0,1,6.255.615,6.027,6.027,0,0,1,1.831-1.216,6.01,6.01,0,0,1,0-5.625,6.01,6.01,0,0,1,1.831-10.034ZM2.725-2.08A4.812,4.812,0,0,0,6.255-.615,4.812,4.812,0,0,0,9.785-2.08,4.829,4.829,0,0,0,11.25-5.625,4.829,4.829,0,0,0,9.785-9.17a4.812,4.812,0,0,0-3.53-1.465A4.812,4.812,0,0,0,2.725-9.17,4.829,4.829,0,0,0,1.26-5.625,4.829,4.829,0,0,0,2.725-2.08ZM6.563-8.76v3.281l2.813,1.67-.469.791L5.625-5.01V-8.76Z"
							transform="translate(0 11.865)"
						/>
					</svg>
				</i>
			);

		case 'gps':
			return (
				<i className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 50.97 50.25">
						<path d="M50.69.28A1,1,0,0,0,49.6.09L.55,17.56a.94.94,0,0,0-.54,1,1,1,0,0,0,.8.8l21.45,9.26L31,49.43a1,1,0,0,0,.8.81h.16a1,1,0,0,0,.85-.54L50.87,1.36A.93.93,0,0,0,50.69.28Z" />
					</svg>
				</i>
			);

		case 'date':
			return (
				<i className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512.11">
						<path d="M432,40H406V20a20,20,0,0,0-40,0V40H275V20a20,20,0,0,0-40,0V40H145V20a20,20,0,0,0-40,0V40H80A80.09,80.09,0,0,0,0,120V432a80.09,80.09,0,0,0,80,80H233a20,20,0,0,0,0-40H80a40,40,0,0,1-40-40V120A40,40,0,0,1,80,80h25v20a20,20,0,0,0,40,0V80h90v20a20,20,0,0,0,40,0V80h91v20a20,20,0,0,0,40,0V80h26a40,40,0,0,1,40,40V234a20,20,0,0,0,40,0V120A80.09,80.09,0,0,0,432,40Z" />
						<path d="M416.64,376.84h-9v-21a20,20,0,0,0-40,0v41a20,20,0,0,0,20,20h29a20,20,0,0,0,0-40Z" />
						<path d="M391,512.11A120.54,120.54,0,1,1,511.54,391.57,120.67,120.67,0,0,1,391,512.11ZM391,313a78.62,78.62,0,1,0,78.62,78.62A78.71,78.71,0,0,0,391,313Z" />
						<circle cx="299" cy="210" r="20" />
						<circle cx="386" cy="210" r="20" />
						<circle cx="125" cy="210" r="20" />
						<circle cx="125" cy="297" r="20" />
						<circle cx="125" cy="384" r="20" />
						<circle cx="212" cy="210" r="20" />
						<circle cx="212" cy="297" r="20" />
						<circle cx="212" cy="384" r="20" />
					</svg>
				</i>
			);

		case 'upload':
			return (
				<i className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512">
						<path d="M412.907,214.08C398.4,140.693,333.653,85.333,256,85.333c-61.653,0-115.093,34.987-141.867,86.08 C50.027,178.347,0,232.64,0,298.667c0,70.72,57.28,128,128,128h277.333C464.213,426.667,512,378.88,512,320 C512,263.68,468.16,218.027,412.907,214.08z M298.667,277.333v85.333h-85.333v-85.333h-64L256,170.667l106.667,106.667H298.667z" />
					</svg>
				</i>
			);

		case 'payment':
			return (
				<i className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 12.3 12.4">
						<path d="M0,6.2c0,3.4,2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S9.6,0,6.2,0c0,0,0,0,0,0C2.8,0,0,2.8,0,6.2z M11.2,6.2c0,2.8-2.3,5.1-5.1,5.1S1.1,9,1.1,6.2s2.3-5.1,5.1-5.1C9,1.1,11.2,3.4,11.2,6.2L11.2,6.2z" />
						<path d="M5.5,2.8v0.7c-0.9,0.3-1.3,1.3-1,2.1c0.2,0.7,0.9,1.1,1.6,1.1c0.3,0,0.6,0.3,0.6,0.6 S6.4,7.9,6.1,7.9c-0.3,0-0.6-0.2-0.7-0.4C5.1,7.2,4.8,7.2,4.5,7.4S4.3,7.9,4.5,8.2c0.3,0.3,0.6,0.6,1,0.7v0.7c0,0.3,0.3,0.6,0.6,0.6 s0.6-0.3,0.6-0.6V8.9c0.9-0.3,1.3-1.3,1-2.1C7.4,6.1,6.8,5.6,6.1,5.6c-0.3,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6c0.2,0,0.5,0.1,0.6,0.3	C6.9,5,7.2,5,7.5,4.8s0.2-0.6,0-0.8C7.2,3.7,6.9,3.6,6.6,3.5V2.8c0-0.3-0.3-0.6-0.6-0.6S5.5,2.5,5.5,2.8z" />
					</svg>
				</i>
			);

		case 'close':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512">
						<path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M359.54,329.374 c4.167,4.165,4.167,10.919,0,15.085L344.46,359.54c-4.167,4.165-10.919,4.165-15.086,0L256,286.167l-73.374,73.374 c-4.167,4.165-10.919,4.165-15.086,0l-15.081-15.082c-4.167-4.165-4.167-10.919,0-15.085l73.374-73.375l-73.374-73.374 c-4.167-4.165-4.167-10.919,0-15.085l15.081-15.082c4.167-4.165,10.919-4.165,15.086,0L256,225.832l73.374-73.374 c4.167-4.165,10.919-4.165,15.086,0l15.081,15.082c4.167,4.165,4.167,10.919,0,15.085l-73.374,73.374L359.54,329.374z" />
					</svg>
				</i>
			);

		case 'eye':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 23.51 12.4">
						<path
							id="Path_1935"
							data-name="Path 1935"
							d="M23.33,5.74C23.12,5.5,18.08,0,11.75,0S.39,5.5.18,5.74a.68.68,0,0,0,0,.92c.21.23,5.25,5.74,11.57,5.74S23.12,6.89,23.33,6.66a.72.72,0,0,0,.18-.46A.67.67,0,0,0,23.33,5.74ZM11.75,11A4.82,4.82,0,1,1,16.57,6.2,4.82,4.82,0,0,1,11.75,11Z"
						/>
						<path
							id="Path_1936"
							data-name="Path 1936"
							d="M12.44,4.82a2.08,2.08,0,0,1,.87-1.68,3.39,3.39,0,0,0-1.56-.38,3.45,3.45,0,1,0,3.39,4,2,2,0,0,1-2.59-1.31A2.06,2.06,0,0,1,12.44,4.82Z"
						/>
					</svg>
				</i>
			);

		case 'delete':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 12.05 14.44">
						<path d="M4.73.94H7.32v.43h.94V.87A.87.87,0,0,0,7.39,0H4.67A.87.87,0,0,0,3.8.88v.5h.93Z" />
						<path d="M10.42,4H1.63a.41.41,0,0,0-.41.41v0L2,13.54a1,1,0,0,0,1,.9H9.12a1,1,0,0,0,1-.9l.74-9.08A.41.41,0,0,0,10.45,4ZM3.76,13.47h0A.46.46,0,0,1,3.27,13L2.81,5.58a.47.47,0,1,1,.93-.08v0L4.2,13a.47.47,0,0,1-.43.5ZM6.5,13a.47.47,0,1,1-.93,0V5.55a.47.47,0,1,1,.93,0ZM9.25,5.57,8.81,13a.46.46,0,0,1-.47.44h0a.47.47,0,0,1-.44-.5l.44-7.45a.47.47,0,0,1,.5-.43A.48.48,0,0,1,9.25,5.57Z" />
						<path d="M12,3l-.31-.92a.6.6,0,0,0-.56-.41H.89a.6.6,0,0,0-.56.41L0,3a.39.39,0,0,0,.24.49l.13,0H11.67a.36.36,0,0,0,.2-.06A.39.39,0,0,0,12,3Z" />
					</svg>
				</i>
			);

		case 'download':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16.24 16.24">
						<path d="M13.85,16.24H2.39A2.39,2.39,0,0,1,0,13.85V10.57a.76.76,0,0,1,.75-.75.76.76,0,0,1,.75.75v3.28a.89.89,0,0,0,.89.89H13.85a.89.89,0,0,0,.89-.89V10.57a.75.75,0,0,1,1.5,0v3.28A2.39,2.39,0,0,1,13.85,16.24Z" />
						<path d="M12.74,6a.75.75,0,0,0-1.06,0L8.87,8.76v-8a.75.75,0,0,0-1.5,0v8L4.56,6A.77.77,0,0,0,3.49,6,.75.75,0,0,0,3.49,7l4.1,4.09a.81.81,0,0,0,.24.17.93.93,0,0,0,.29.05,1,1,0,0,0,.29-.05.81.81,0,0,0,.24-.17L12.74,7A.74.74,0,0,0,12.74,6Z" />
					</svg>
				</i>
			);

		case 'filter':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 13.68 12.41">
						<path d="M8.11,12.41a.46.46,0,0,1-.23-.05L5.35,11.09a.5.5,0,0,1-.28-.44v-4L.12.82A.47.47,0,0,1,.05.29.49.49,0,0,1,.5,0H13.18a.49.49,0,0,1,.45.29.51.51,0,0,1-.07.53l-5,5.86v5.23a.5.5,0,0,1-.24.43A.48.48,0,0,1,8.11,12.41Zm-2-2.07,1.54.76V6.5a.52.52,0,0,1,.11-.32L12.1,1H1.58L6,6.18a.47.47,0,0,1,.12.32Z" />
					</svg>
				</i>
			);

		case 'info':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 15.22 15.22">
						<path d="M7.61,15.22A7.61,7.61,0,0,1,7.61,0h0a7.61,7.61,0,0,1,7.61,7.61h0A7.61,7.61,0,0,1,7.61,15.22Zm0-13.72h0a6.11,6.11,0,1,0,4.32,1.79A6.12,6.12,0,0,0,7.61,1.5Z" />
						<path d="M7.61,11.1a.74.74,0,0,1-.75-.75V7.61a.75.75,0,0,1,1.5,0v2.74A.75.75,0,0,1,7.61,11.1Z" />
						<path d="M7.61,5.62a.75.75,0,0,1-.53-.22.77.77,0,0,1-.22-.53.75.75,0,0,1,.22-.53.77.77,0,0,1,1.06,0,.75.75,0,0,1,.22.53.77.77,0,0,1-.22.53A.75.75,0,0,1,7.61,5.62Z" />
					</svg>
				</i>
			);

		case 'listView':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 14.32 10.65">
						<path
							id="list-view"
							d="M1.22,0A1.22,1.22,0,0,0,0,1.23,1.21,1.21,0,0,0,1.22,2.46,1.2,1.2,0,0,0,2.43,1.23,1.22,1.22,0,0,0,1.22,0Zm0,4.1A1.21,1.21,0,0,0,0,5.33,1.22,1.22,0,0,0,1.22,6.56,1.22,1.22,0,0,0,2.43,5.33,1.2,1.2,0,0,0,1.22,4.1Zm0,4.09A1.23,1.23,0,1,0,2.43,9.42,1.22,1.22,0,0,0,1.22,8.19Zm12.62.41H4.2A.45.45,0,0,0,3.72,9v.82a.44.44,0,0,0,.48.41h9.64a.45.45,0,0,0,.48-.41V9A.46.46,0,0,0,13.84,8.6Zm0-8.19H4.2a.45.45,0,0,0-.48.41v.82a.44.44,0,0,0,.48.41h9.64a.45.45,0,0,0,.48-.41V.82A.46.46,0,0,0,13.84.41Zm0,4.1H4.2a.44.44,0,0,0-.48.41v.82a.45.45,0,0,0,.48.41h9.64a.46.46,0,0,0,.48-.41V4.92A.45.45,0,0,0,13.84,4.51Z"
						/>
					</svg>
				</i>
			);

		case 'location':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 11.77 15.01">
						<path d="M6,15a.5.5,0,0,1-.42-.23L.88,8.86a5.67,5.67,0,0,1-.88-3,5.89,5.89,0,0,1,11.77,0,5.64,5.64,0,0,1-.83,3l-4.55,6A.49.49,0,0,1,6,15ZM1,5.81a4.76,4.76,0,0,0,.74,2.54L6,13.6,10.1,8.29a4.94,4.94,0,0,0,.7-2.48A4.92,4.92,0,0,0,1,5.81Zm2,0a2.95,2.95,0,1,1,3,2.9h0a2.93,2.93,0,0,1-2.94-2.9Zm1,0a2,2,0,1,0,2-1.94h0a2,2,0,0,0-2,1.94Z" />
					</svg>
				</i>
			);

		case 'lock':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 10.4 14.59">
						<path d="M9.4,4.53H8.66V2.34S8.53,0,5.28,0C2.71,0,1.84,1.51,1.74,2.36V4.53H1a1,1,0,0,0-1,1V9.62a5.09,5.09,0,0,0,5.2,5,5.09,5.09,0,0,0,5.2-5V5.53A1,1,0,0,0,9.4,4.53ZM2.74,2.42S2.94,1,5.28,1,7.65,2.25,7.66,2.36V4.53H2.74ZM9.4,5.53v2.7a11,11,0,0,1-8.4,0V5.53ZM5.2,13.59a4.09,4.09,0,0,1-4.2-4V9.29a11.88,11.88,0,0,0,4.2.78,11.88,11.88,0,0,0,4.2-.78v.33A4.09,4.09,0,0,1,5.2,13.59Z" />
					</svg>
				</i>
			);

		case 'unlock':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 13.25 14.33">
						<path d="M10.1,0C7.7,0,6.89,1.42,6.8,2.24V4.9H1a1,1,0,0,0-1,1V9.44l0,0,0,.06v.13a4.79,4.79,0,0,0,4.88,4.67A4.79,4.79,0,0,0,9.79,9.66V9.54l0-.07,0,0V5.9a1,1,0,0,0-1-1h-1V2.31C7.8,2.26,8,1,10.1,1s2.14,1.13,2.15,1.25l1,0S13.13,0,10.1,0ZM4.92,13.33A3.79,3.79,0,0,1,1.08,10a7.62,7.62,0,0,1,2.09-.81A1.77,1.77,0,0,0,3,9.92a1.82,1.82,0,1,0,3.63,0,1.78,1.78,0,0,0-.18-.77A7.47,7.47,0,0,1,8.75,10,3.78,3.78,0,0,1,4.92,13.33ZM4,9.92a.81.81,0,0,1,.81-.81A.82.82,0,1,1,4,9.92ZM8.79,8.86A8.76,8.76,0,0,0,1,8.87v-3H8.79Z" />
					</svg>
				</i>
			);

		case 'map':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 8.65 13">
						<path
							id="map"
							d="M4.33,13,7.79,7.74a5.43,5.43,0,0,0-.4-6.41,4.19,4.19,0,0,0-5.91-.21l-.21.21a5.4,5.4,0,0,0-.41,6.4Zm0-10.15A1.66,1.66,0,1,1,2.79,4.6V4.51A1.62,1.62,0,0,1,4.37,2.85Z"
						/>
					</svg>
				</i>
			);

		case 'share':
			return (
				<i
					onClick={() => removeMedia(index)}
					className={`custIcon custIcon-${props.type} ${addClassName} `}>
					<svg
						width="1em"
						height="1em"
						fill="currentcolor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 15.84 14.44">
						<path d="M15.84,7.22,9.26,0V4.3H7.86A7.86,7.86,0,0,0,0,12.16v2.28l.62-.68a11.16,11.16,0,0,1,8.24-3.63h.4v4.3Z" />
					</svg>
				</i>
			);

		// case 'info':
		// return (

		// );
		default:
			return null;
	}
};

// height={props.height}
// width={props.width}
// fill={props.fill}
