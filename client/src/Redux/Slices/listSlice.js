import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allLists: [],
	loadingListService: true,
};

const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.loadingListService = action.payload;
		},
		successCreatingList: (state, action) => {
			state.allLists.push(action.payload);
		},
		successFetchingLists: (state, action) => {
			state.allLists = action.payload;
		},
		successDeletingList: (state, action) => {
			state.allLists = state.allLists.filter((list) => list._id !== action.payload);
		},
		deleteCard: (state,action)=> {
			const {listId,cardId} = action.payload;
			state.allLists = state.allLists.map((list) => {
				if(list._id === listId){
					list.cards = list.cards.filter(card=> card._id !== cardId);					
				}
				return list;
			});
		},
		successCreatingCard: (state, action) => {
			state.allLists = state.allLists.map((list) => {
				if (list._id === action.payload.listId) {
					return action.payload.updatedList;
				}
				return list;
			});
		},
		updateCardDragDrop: (state, action) => {
			state.allLists = action.payload;
		},
		updateListDragDrop: (state, action) => {
			state.allLists = action.payload;
		},
		setCardTitle: (state, action) => {
			const { listId, cardId, title } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) card.title = title;
						return card;
					});
				}
				return list;
			});
		},
		updateListTitle: (state, action) => {
			const { listId, title } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.title = title;
				}
				return list;
			});
		},
		updateMemberOfCard: (state, action) => {
			const { listId, cardId, memberId, memberName, memberColor } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) card.members.unshift({ user: memberId, name: memberName, color:memberColor });
						return card;
					});
				}
				return list;
			});
		},
		deleteMemberOfCard: (state, action) => {
			const { listId, cardId, memberId } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId)
							card.members = card.members.filter((member) => member.user !== memberId);
						return card;
					});
				}
				return list;
			});
		},
		updateDescriptionOfCard: (state, action) => {
			const { listId, cardId, description } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) card.description = description;
						return card;
					});
				}
				return list;
			});
		},
		updateLabelSelectionOfCard: (state, action) => {
			const { listId, cardId, labelId, selected } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.labels = card.labels.map((label) => {
								if (label._id === labelId) {
									label.selected = selected;
								}
								return label;
							});
						}
						return card;
					});
				}
				return list;
			});
		},
		updateLabelOfCard: (state, action) => {
			const { listId, cardId, labelId, text, color, backColor } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.labels = card.labels.map((label) => {
								if (label._id === labelId) {
									label.text = text;
									label.color = color;
									label.backColor = backColor;
								}
								return label;
							});
						}
						return card;
					});
				}
				return list;
			});
		},
		createLabelForCard: (state, action) => {
			const { listId, cardId, _id, text, color, backColor } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.labels.unshift({ _id, text, color, backColor, selected: true });
						}
						return card;
					});
				}
				return list;
			});
		},
		deleteLabelOfCard: (state, action) => {
			const { listId, cardId, labelId } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.labels = card.labels.filter((label) => label._id !== labelId);
						}
						return card;
					});
				}
				return list;
			});
		},
		createChecklistForCard: (state, action) => {
			const { listId, cardId, _id, title } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.checklists.push({ _id, title, items: [] });
						}
						return card;
					});
				}
				return list;
			});
		},
		deleteChecklistOfCard: (state, action) => {
			const { listId, cardId, checklistId } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.checklists = card.checklists.filter((l) => l._id !== checklistId);
						}
						return card;
					});
				}
				return list;
			});
		},
		addChecklistItemForCard: (state, action) => {
			const { listId, cardId, checklistId, _id, text } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.checklists = card.checklists.map((list) => {
								if (list._id.toString() === checklistId.toString()) {
									list.items.push({ _id: _id, text: text, completed: false });
								}
								return list;
							});
						}
						return card;
					});
				}
				return list;
			});
		},
		setChecklistItemCompletedOfCard: (state, action) => {
			const { listId, cardId, checklistId, checklistItemId, completed } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.checklists = card.checklists.map((list) => {
								if (list._id.toString() === checklistId.toString()) {
									list.items = list.items.map((item) => {
										if (item._id === checklistItemId) {
											item.completed = completed;
										}
										return item;
									});
								}
								return list;
							});
						}
						return card;
					});
				}
				return list;
			});
		},
		deleteChecklistItemOfCard: (state, action) => {
			const { listId, cardId, checklistId, checklistItemId } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.checklists = card.checklists.map((list) => {
								if (list._id.toString() === checklistId.toString()) {
									list.items = list.items.filter((item) => item._id !== checklistItemId);
								}
								return list;
							});
						}
						return card;
					});
				}
				return list;
			});
		},
		setChecklistItemTextOfCard: (state, action) => {
			const { listId, cardId, checklistId, checklistItemId, text } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.checklists = card.checklists.map((list) => {
								if (list._id.toString() === checklistId.toString()) {
									list.items = list.items.map((item) => {
										if (item._id === checklistItemId) {
											item.text = text;
										}
										return item;
									});
								}
								return list;
							});
						}
						return card;
					});
				}
				return list;
			});
		},
		updateStartDueDatesOfCard: (state, action) => {
			const { listId, cardId, startDate, dueDate, dueTime } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.date.startDate = startDate;
							card.date.dueDate = dueDate;
							card.date.dueTime = dueTime;
							if (dueDate === null) card.date.completed = false;
						}
						return card;
					});
				}
				return list;
			});
		},
		updateDateCompletedOfCard: (state, action) => {
			const { listId, cardId, completed } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.date.completed = completed;
						}
						return card;
					});
				}
				return list;
			});
		},
		addAttachmentForCard: (state, action) => {
			const { listId, cardId, link, name, _id,date } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.attachments.push({ link: link, name: name, _id:_id, date: date });
						}
						return card;
					});
				}
				return list;
			});
		},
		deleteAttachmentOfCard: (state, action) => {
			const { listId, cardId, attachmentId } = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.attachments = card.attachments.filter((attachment) => attachment._id !== attachmentId);
						}
						return card;
					});
				}
				return list;
			});
		},
		updateCoverOfCard: (state, action) => {
			const { listId, cardId, color, isSizeOne} = action.payload;
			state.allLists = state.allLists.map((list) => {
				if (list._id === listId) {
					list.cards = list.cards.map((card) => {
						if (card._id === cardId) {
							card.cover.color = color;
							card.cover.isSizeOne = isSizeOne;
						}
						return card;
					});
				}
				return list;
			});
		},
	},
});

export const {
	setLoading,
	successCreatingList,
	successFetchingLists,
	successDeletingList,
	deleteCard,
	successCreatingCard,
	updateCardDragDrop,
	updateListDragDrop,
	setCardTitle,
	updateListTitle,
	updateMemberOfCard,
	deleteMemberOfCard,
	updateDescriptionOfCard,
	updateLabelSelectionOfCard,
	updateLabelOfCard,
	createLabelForCard,
	deleteLabelOfCard,
	createChecklistForCard,
	deleteChecklistOfCard,
	addChecklistItemForCard,
	setChecklistItemCompletedOfCard,
	deleteChecklistItemOfCard,
	setChecklistItemTextOfCard,
	updateStartDueDatesOfCard,
	updateDateCompletedOfCard,
	addAttachmentForCard,
	deleteAttachmentOfCard,
	updateCoverOfCard,

} = listSlice.actions;

export default listSlice.reducer;
