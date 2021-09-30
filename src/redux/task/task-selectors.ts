import RootState from '../store';

const getSprint = (state: RootState) => state.sprints.items;
const getTasks = (state: RootState) => state.tasks.items;

const taskSelectors = {
  getTasks,
  getSprint,
};

export default taskSelectors
