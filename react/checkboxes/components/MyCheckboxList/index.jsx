import './index.scss';
import MyCheckbox from '../MyCheckbox';
import MyButton from '../MyButton';

const { useState, useCallback, useMemo, useEffect } = React;

function MyCheckboxList ({
  data,
  headerCells,
  allCheckedTip,
  onCheckedDataChange
}) {
  const [ checkedData, setCheckedData ] = useState([]);
  const [ originData, setOriginData ] = useState(data);
  const dataProps = Object.keys(originData[0]);

  const allCheckedText = useMemo(() => {
    if (checkedData.length >= 0 && checkedData.length < originData.length) {
      return allCheckedTip.all || 'Check all';
    } else {
      return allCheckedTip.none || 'Cancel all';
    }
  }, [checkedData]);

  useEffect(() => {
    onCheckedDataChange(checkedData);
  }, [checkedData]);

  const setAllCheck = useCallback((e) => {
    const _checked = e.target.checked;
    setCheckedData(_checked ? originData : []);
  });

  const setSingleCheck = useCallback((e, item) => {
    const _checked = e.target.checked;
    setCheckedData(checkedData => (
      _checked ? [...checkedData, item]
               : checkedData.filter(data => data.id !== item.id)
    ));
  });

  const removeItem = useCallback((id) => {
    setOriginData(originData => originData.filter(item => item.id !== id));
    setCheckedData(checkedData => checkedData.filter(item => item.id !== id));
  });

  return (
    <div>
      <table border="1" width="500" align="center">
        <thead>
          <tr>
            <td colSpan={ 5 } align="left">
              <MyCheckbox
                checked={ checkedData.length === originData.length }
                onChange={ (e) => setAllCheck(e) }
              >
                { allCheckedText }
              </MyCheckbox>
            </td>
          </tr>
          {
            headerCells &&
            <tr>
              {
                headerCells.map(item => (
                  <th key={ item }>{ item }</th>
                ))
              }
          </tr>
          }
        </thead>
        <tbody>
          {
            originData && originData.map(item => (
              <tr key={ item.id }>
                <td>
                  <MyCheckbox
                    checked={
                      checkedData.some(data => data.id === item.id)
                    }
                    onChange={ (e) => setSingleCheck(e, item) }
                  ></MyCheckbox>
                </td>
                {
                  // ['id', 'name', 'score']
                  dataProps.map(prop => (
                    <td key={ prop }>{ item[prop] }</td>
                  ))
                }
                <td>
                  <MyButton
                    type="warn"
                    onClick={ () => removeItem(item.id) }
                  >删除</MyButton>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default MyCheckboxList;