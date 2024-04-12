import React, { useState, useEffect } from 'react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'

const ToyEditor: React.FC = () => {
  const [editor, setEditor] = useState<IDomEditor | null>(null)
  const [html, setHtml] = useState('<p>hello</p>')
  const toolbarConfig: Partial<IToolbarConfig> = { }
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
  }

  return (
    <div>
      <Toolbar
        editor={editor}
        defaultConfig={toolbarConfig}
        mode="default"
        style={{ borderBottom: '1px solid #ccc' }}
      />
      <Editor
        defaultConfig={editorConfig}
        value={html}
        onCreated={setEditor}
        onChange={editor => setHtml(editor.getHtml())}
        mode="default"
      />
    </div>
  )
}

export default ToyEditor