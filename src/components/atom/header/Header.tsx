import React from 'react';
import { HeaderStyle } from './Header.styles';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  title: string,
  menu1: string,
  menu2: string,
  menu3: string,
  menu4: string,
  onLogin: () => void;
  onLogout: () => void;
}

export const Header = ({
  user,
  title,
  menu1,
  menu2,
  menu3,
  menu4,
  onLogin,
  onLogout,
}: HeaderProps) => {
  return (
    <HeaderStyle.Wrapper>
      <HeaderStyle.Container>
        <HeaderStyle.WrapperLeft>{title}</HeaderStyle.WrapperLeft>
        <HeaderStyle.GNB>
          <HeaderStyle.Menus>{menu1}</HeaderStyle.Menus>
          <HeaderStyle.Menus>{menu2}</HeaderStyle.Menus>
          <HeaderStyle.Menus>{menu3}</HeaderStyle.Menus>
          <HeaderStyle.Menus>{menu4}</HeaderStyle.Menus>
        </HeaderStyle.GNB>
        <HeaderStyle.WrapperRight>
          <HeaderStyle.asdf>login</HeaderStyle.asdf>
        </HeaderStyle.WrapperRight>
      </HeaderStyle.Container>
    </HeaderStyle.Wrapper>
  )
};

// export default Header;

// state 구현하기
// import React from 'react';

// export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
//   return (
//     <div className={`list-item ${state}`}>
//       <label className="checkbox">
//         <input
//           type="checkbox"
//           defaultChecked={state === 'TASK_ARCHIVED'}
//           disabled={true}
//           name="checked"
//         />
//         <span
//           className="checkbox-custom"
//           onClick={() => onArchiveTask(id)}
//           id={`archiveTask-${id}`}
//           aria-label={`archiveTask-${id}`}
//         />
//       </label>
//       <div className="title">
//         <input type="text" value={title} readOnly={true} placeholder="Input title" />
//       </div>

//       <div className="actions" onClick={event => event.stopPropagation()}>
//         {state !== 'TASK_ARCHIVED' && (
//           // eslint-disable-next-line jsx-a11y/anchor-is-valid
//           <a onClick={() => onPinTask(id)}>
//             <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }
