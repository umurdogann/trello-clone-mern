import React from 'react';
import { useSelector } from 'react-redux';
import MembersPopover from '../Popovers/Members/MembersPopover';
import BasePopover from '../ReUsableComponents/BasePopover';
import { Title, RowContainer, AddAvatar } from './styled';
import { Avatar } from '@mui/material';
const MembersFeature = (props) => {
	const card = useSelector((state) => state.card);
    const [memberPopover, setMemberPopover] = React.useState(null);
	return (
		<>
			<Title>Members</Title>
			<RowContainer>
				{card.members.map((member,index) => {
					return <Avatar key={index} sx={{ width: 32, height: 32, bgcolor: member.color, fontSize:'0.875rem', fontWeight:'800' }}>{member.name[0].toUpperCase()}</Avatar>;
				})}
				<AddAvatar onClick={(event) => setMemberPopover(event.currentTarget)}>+</AddAvatar>
			</RowContainer>
            {memberPopover && (
				<BasePopover
					anchorElement={memberPopover}
					closeCallback={() => {
						setMemberPopover(null);
					}}
					title='Members'
					contents={<MembersPopover />}
				/>
			)}
		</>
	);
};

export default MembersFeature;
