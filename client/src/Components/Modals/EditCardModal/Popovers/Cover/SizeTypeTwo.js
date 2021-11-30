import React, { useEffect, useState } from 'react';
import styled from 'styled-components';



const Container = styled.div`
	height: 4rem;
	width: 100%;
    border: 2px solid ${props=>props.selected?'#0079bf':'#fff'};	    
    border-radius: 5px;
    padding:1px;    
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid rgba(9, 30, 66, 0.08);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
    justify-content: flex-end;
    padding: 0rem 0.5rem 0.3rem 0.5rem;
    gap: 0.25rem;
    background-color: ${props=>props.top};
`;

const LongBar = styled.div`
	width: 100%;
	height: 0.25rem;
	border-radius: 3px;
	background-color: ${props=>props.primary};
`;

const ShortBar = styled(LongBar)`
	width: 75%;
`;

const SizeTypeTwo = (props) => {
    const [colors, setColors] = useState({
        top: props.color?props.color:'#CED2DA',
        primary: props.color?'#6b778c':'#fff',
    });
	useEffect(() => {        
		setColors({
			top: props.color?props.color:'#CED2DA',
			primary: props.color?'#6b778c':'#fff',
		});
		
	}, [props.color, props.selected]);

	return (
		<Container selected={props.selected}>
			<Wrapper top={colors.top}>
					<LongBar primary={colors.primary}/>
					<ShortBar primary={colors.primary} />
			</Wrapper>
		</Container>
	);
}

export default SizeTypeTwo
