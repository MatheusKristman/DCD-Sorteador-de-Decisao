import create from 'zustand';

const useShufflerStore = create((set) => ({
  values: [],
  inputValue: '',
  handleInputValue: (e) => set(() => {
    return { inputValue: e.target.value }
  }),
  addChoice: () => set((state) => {
    const newValues = [ ...state.values ];
    newValues.push({
      value: state.inputValue,
      newValue: '',
      isEditable: false,
    });
    return { inputValue: '', values: newValues };
  }),
  handleEditValue: (val, index) => set((state) => {
    const arrCopied = [...state.values];
    arrCopied[index].newValue = val;
    return { values: arrCopied };
  }),
  editable: (index) => set((state) => {
    const newArr = [...state.values];
    const val = newArr[index].value;
    newArr[index].isEditable = true;
    return { values: newArr }
  }),
  acceptEdit: (index) => set((state) => {
    const arrCopied = [...state.values];
    arrCopied[index].value = arrCopied[index].newValue;
    arrCopied[index].newValue = '';
    arrCopied[index].isEditable = false;
    return { values: arrCopied };
  }),
  declineEdit: (index) => set((state) => {
    const newArr = [...state.values];
    newArr[index].isEditable = false;
    newArr[index].newValue = '';
    return { values: newArr }
  }),
  deleteChoice: (index) => set((state) => {
    const newValues = [ ...state.values ];
    newValues.filter((choice) => choice.value !== state.values[index].value);
    return { values: newValues };
  }),
}));

export default useShufflerStore;