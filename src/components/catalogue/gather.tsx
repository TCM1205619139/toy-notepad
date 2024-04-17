// import React, { ReactNode, useState } from 'react'
// import Detail from '@/components/catalogue/detail'
//
// import "./gather.scss"
//
// const Gather: React.FC<TreeDataNode> = (gather: TreeDataNode) => {
//   const [details, setDetails] = useState<TreeDataNode[]>(gather.children || [])
//
//   const Content = () => (
//     <div className="gather-container">
//       <FolderOpenOutlined/>
//       <span>{ gather.title as ReactNode }</span>
//     </div>
//   )
//
//   return (
//     <Tree.TreeNode title={Content} key={gather.key}>
//       {
//         details.map(detail => {
//           return Detail(detail)
//         })
//       }
//     </Tree.TreeNode>
//   )
// }
//
// export default Gather
