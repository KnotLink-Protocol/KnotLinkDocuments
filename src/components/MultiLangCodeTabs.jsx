import React, { useRef, useEffect, useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export default function MultiLangCodeTabs({ qtcpp, pyqt5, python, cpp, java, js, lua, blockly }) {
  const blocklyRef = useRef(null);
  const containerRef = useRef(null);
  const [workspace, setWorkspace] = useState(null);
  const [workspaceHeight, setWorkspaceHeight] = useState(10); // 默认高度

  // 初始化只读的 Blockly 工作区
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Blockly && blocklyRef.current && !workspace) {
      const blocklyWorkspace = window.Blockly.inject(blocklyRef.current, {
        readOnly: true, // 设置为只读模式
        move: {
          scrollbars: false, // 隐藏滚动条，因为我们自己控制大小
          drag: false, // 禁止拖动
          wheel: false // 禁止滚轮缩放
        },
        zoom: {
          controls: false, // 隐藏缩放控件
          wheel: false, // 禁止滚轮缩放
          startScale: 1.0,
          maxScale: 1.0, // 固定缩放比例
          minScale: 1.0,
          scaleSpeed: 1.0
        },
        trashcan: false, // 隐藏垃圾桶
        collapse: false, // 禁止折叠
        comments: false, // 禁止注释
        disable: true, // 禁用所有交互
        sounds: false, // 禁用声音
        grid: {
          spacing: 20,
          length: 1,
          colour: '#f5f5f5',
          snap: false
        }
      });

      setWorkspace(blocklyWorkspace);
    }
  }, [workspace]);

  // 动态加载 Blockly 资源
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.Blockly) {
      // 加载 Blockly CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/blockly/blockly.min.css';
      document.head.appendChild(link);

      // 加载 Blockly JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/blockly/blockly.min.js';
      script.onload = () => {
        console.log('Blockly 加载完成');
      };
      document.body.appendChild(script);
    }
  }, []);

  // 当 blockly JSON 变化时更新工作区
  useEffect(() => {
    if (workspace && blockly) {
      try {
        // 解析 JSON 并加载到工作区
        const blocklyJson = JSON.parse(blockly);
        workspace.clear();
        
        // 使用 Blockly 的 JSON 序列化方法加载工作区
        window.Blockly.serialization.workspaces.load(blocklyJson, workspace);
        
        // 调整工作区大小以适应内容
        setTimeout(() => {
          adjustWorkspaceSize();
        }, 100);
      } catch (error) {
        console.error('加载 Blockly JSON 时出错:', error);
        
        // 如果 JSON 解析失败，尝试使用旧版的 XML 方式（向后兼容）
        try {
          const xml = window.Blockly.utils.xml.textToDom(blockly);
          workspace.clear();
          window.Blockly.Xml.domToWorkspace(xml, workspace);
          
          // 调整工作区大小以适应内容
          setTimeout(() => {
            adjustWorkspaceSize();
          }, 100);
        } catch (xmlError) {
          console.error('也未能作为 XML 加载:', xmlError);
        }
      }
    }
  }, [workspace, blockly]);

  // 调整工作区大小以适应内容
  const adjustWorkspaceSize = () => {
    if (!workspace) return;
    
    try {
      // 获取工作区的度量信息
      const metrics = workspace.getMetrics();
      
      // 计算内容的高度和宽度
      const contentHeight = Math.max(metrics.contentHeight, 100); // 最小高度100px
      const contentWidth = Math.max(metrics.contentWidth, 300); // 最小宽度300px
      
      // 添加一些边距
      const padding = 40;
      const newHeight = contentHeight + padding;
      const newWidth = contentWidth + padding;
      
      // 设置工作区大小
      setWorkspaceHeight(newHeight);
      
      // 调整 Blockly 工作区的画布大小
      const blocklySvg = blocklyRef.current.querySelector('svg');
      if (blocklySvg) {
        blocklySvg.setAttribute('height', newHeight);
        blocklySvg.setAttribute('width', newWidth);
      }
      
      // 调整容器大小
      if (containerRef.current) {
        containerRef.current.style.height = `${newHeight}px`;
        containerRef.current.style.width = `${newWidth}px`;
      }
      
      // 通知 Blockly 调整大小
      setTimeout(() => {
        if (workspace && workspace.resize) {
          workspace.resize();
        }
      }, 50);
    } catch (error) {
      console.error('调整工作区大小时出错:', error);
    }
  };

  // 格式化 JSON 用于显示
  const formatBlocklyJson = () => {
    if (!blockly) return '';
    
    try {
      const parsed = JSON.parse(blockly);
      return JSON.stringify(parsed, null, 2);
    } catch (error) {
      return blockly; // 如果解析失败，返回原始字符串
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .tabs-container .tabs__item {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
            font-size: 0.875rem;
          }
          .blockly-readonly-container {
            width: 100%;
            min-height: 100px;
            overflow: auto;
            border: 1px solid #e1e1e1;
            border-radius: 4px;
            background: white;
            display: flex;
            justify-content: center;
            padding: 10px;
          }
          .blockly-readonly-container .blocklyDraggable {
            cursor: default !important;
          }
          .blockly-workspace-container {
            display: inline-block;
            position: relative;
          }
        `
      }} />

      <Tabs
        groupId="language"
        defaultValue="python"
        values={[
          
          { label: 'Qt C++',    value: 'qtcpp'  },
          { label: 'PyQt5',     value: 'pyqt5'  },
          { label: 'Python',    value: 'python' },
          { label: 'C++',       value: 'cpp'    },
          { label: 'Java',      value: 'java'   },
          { label: 'JavaScript',value: 'js'     },
          { label: 'Lua',       value: 'lua'    },
          { label: 'Blockly',    value: 'blockly' },
        ]}>
        
        {/* Blockly 只读工作区 */}
        <TabItem value="blockly">
          <div className="blockly-readonly-container">
            <div 
              ref={containerRef}
              className="blockly-workspace-container"
              style={{ height: `${workspaceHeight}px` }}
            >
              <div 
                ref={blocklyRef} 
                style={{ height: '100%' }}
              />
            </div>
          </div>
          
          {blockly && (
            <div style={{ marginTop: '1rem' }}>
              <details>
                <summary>查看 Blockly JSON 数据</summary>
                <CodeBlock language="json">{formatBlocklyJson()}</CodeBlock>
              </details>
            </div>
          )}
        </TabItem>

        {/* 原有的代码选项卡 */}
        <TabItem value="qtcpp">
          <CodeBlock language="cpp">{qtcpp}</CodeBlock>
        </TabItem>
        <TabItem value="pyqt5">
          <CodeBlock language="python">{pyqt5}</CodeBlock>
        </TabItem>
        <TabItem value="python">
          <CodeBlock language="python">{python}</CodeBlock>
        </TabItem>
        <TabItem value="cpp">
          <CodeBlock language="cpp">{cpp}</CodeBlock>
        </TabItem>
        <TabItem value="java">
          <CodeBlock language="java">{java}</CodeBlock>
        </TabItem>
        <TabItem value="js">
          <CodeBlock language="javascript">{js}</CodeBlock>
        </TabItem>
        <TabItem value="lua">
          <CodeBlock language="lua">{lua}</CodeBlock>
        </TabItem>
      </Tabs>
    </>
  );
}