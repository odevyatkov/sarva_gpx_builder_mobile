import ScreenState from '../../modules/screen/redux/interfaces/ScreenState';
import GeneratorFormState from '../../modules/generatorForm/redux/interfaces/GeneratorFormState';

export default interface ApplicationState {
  screen: ScreenState;
  generatorForm: GeneratorFormState;
}
