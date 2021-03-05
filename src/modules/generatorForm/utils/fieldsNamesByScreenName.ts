import ScreenName from '../../screen/enums/ScreenName';
import FieldName from '../redux/types/FieldName';

export default function fieldsNamesByScreenName(screenName: ScreenName): FieldName[] {
  switch (screenName) {
    case ScreenName.BuildByCenter:
      return [
        'center',
        'radius',
        'cellSize',
        'fileName',
      ];

    case ScreenName.BuildByBBox:
      return [
        'fromPoint',
        'toPoint',
        'cellSize',
        'fileName',
      ];

    default:
      return [];
  }
}
