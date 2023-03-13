import { Editor } from 'amis-editor';
import * as React from 'react';
import { Select } from 'amis-ui';
import 'amis-editor-core/lib/style.css';
import {currentLocale} from 'i18n-runtime';
function changeLocale(value: string) {
    localStorage.setItem('suda-i18n-locale', value);
    window.location.reload();
}

const editorLanguages = [
    {
      label: '简体中文',
      value: 'zh-CN'
    },
    {
      label: 'English',
      value: 'en-US'
    }
  ];

export default function (props: any) {
    const curLanguage = currentLocale(); // 获取当前语料类型
    return (
        <>
        <Select
              className='margin-left-space'
              options={editorLanguages}
              value={curLanguage}
              clearable={false}
              onChange={(e: any) => changeLocale(e.value)}
            />
            <Editor
                theme={'cxd'}
                value= {{
                    "type": "page",
                    "title": "Hello world",
                    "body": [
                      {
                        "type": "tpl",
                        "tpl": "初始页面",
                        "inline": false,
                        "id": "u:4ba997bf327c"
                      }
                    ],
                    "id": "u:5f1a1b469783"
                  }}
                {...props}
            />
        </>
    )
}