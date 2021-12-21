import styled from 'styled-components';
import { xs } from '../../../../BreakPoints';
export const Container = styled.div`
	padding-left: 3.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
	flex-wrap: wrap;
	${xs({
		paddingLeft: '1rem',
	})};
`;

export const FeatureContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Title = styled.div`
	color: #5e6c84;
	font-size: 0.85rem;
	font-weight: 600;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	min-height: 2rem;
	gap: 0.3rem;
`;

export const Avatar = styled.div`
	display: flex;
	border-radius: 50%;
	background-color: #5e6c84;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	color: white;
	font-size: 0.85rem;
	height: 2rem;
	width: 2rem;
	cursor: pointer;
`;

export const AddAvatar = styled(Avatar)`
	background-color: rgba(0, 0, 0, 0.06);
	color: #172b4d;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export const Label = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 3px;
	height: 2rem;
	min-width: 2.5rem;
	font-size: 0.85rem;
	font-weight: 800;
	padding: 0rem 0.75rem;
	color: white;
	width: auto;
	background-color: ${(props) => props.color};
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.hoverColor};
	}
`;

export const AddLabel = styled(Label)`
	background-color: rgba(0, 0, 0, 0.06);
	color: #42526e;
	min-width: 2rem;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export const DateDropDown = styled.div`
	background-color: rgba(0, 0, 0, 0.04);
	min-height: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	cursor: pointer;
	gap: 0.3rem;
	width: fit-content;
	padding: 0rem 0.5rem 0rem 1rem;
	transition: 200ms ease-in;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
	${xs({
		textAlign: 'center',
		width: '90%',
	})};
`;

export const CompleteLabel = styled.div`
	display: ${(props) => (props.show ? 'block' : 'none')};
	background-color: #61bd4f;
	color: #fff;
	font-size: 0.75rem;
	padding: 0rem 0.25rem;
	margin-bottom: 2px;
	border-radius: 2px;
`;

export const OverDueLabel = styled(CompleteLabel)`
	background-color: #ec9488;
`;

export const DateText = styled.span`
	font-size: 0.87rem;
	color: #172b4d;
`;
