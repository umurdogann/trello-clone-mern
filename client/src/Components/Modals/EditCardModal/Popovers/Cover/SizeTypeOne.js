import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 4rem;
	width: 100%;
	border: 2px solid ${(props) => (props.selected ? '#0079bf' : '#fff')};
	border-radius: 5px;
	padding: 1px;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid rgba(9, 30, 66, 0.08);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
`;

const Top = styled.div`
	width: 100%;
	background-color: ${(props) => props.top};
	height: 1.75rem;
	border-radius: 3px 3px 0px 0px;
`;
const Bottom = styled.div`
	padding: 0.4rem 0.3rem 0.2rem 0.3rem;
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
`;
const LongBar = styled.div`
	width: 100%;
	height: 0.25rem;
	border-radius: 3px;
	background-color: ${(props) => props.primary};
`;

const ShortBar = styled(LongBar)`
	width: 75%;
`;
const Footer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
const SquareWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: fit-content;
	gap: 0.1rem;
`;
const Square = styled.div`
	width: 1rem;
	height: 0.3rem;
	border-radius: 5px;
	background-color: ${(props) => props.primary}; //6b778c
`;
const Circle = styled.div`
	height: 0.5rem;
	width: 0.5rem;
	border-radius: 50%;
	background-color: ${(props) => props.primary};
`;

const SizeTypeOne = (props) => {
	const [colors, setColors] = useState({
		top: props.selected ? props.color : '#CED2DA',
		primary: props.selected ? '#6b778c' : '#CED2DA',
	});
	useEffect(() => {
		setColors({
			top: props.color ? props.color : '#CED2DA',
			primary: props.color ? '#6b778c' : '#CED2DA',
		});
	}, [props.color, props.selected]);

	return (
		<Container selected={props.selected}>
			<Wrapper>
				<Top top={colors.top} />
				<Bottom>
					<LongBar primary={colors.primary} />
					<ShortBar primary={colors.primary} />
					<Footer>
						<SquareWrapper>
							<Square primary={colors.primary} />
							<Square />
						</SquareWrapper>
						<Circle primary={colors.primary} />
					</Footer>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

export default SizeTypeOne;
