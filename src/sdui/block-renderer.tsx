import { UIBlock } from '@/types/campaign';
import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { ComponentFactory } from './component-factory';

interface BlockRendererProps {
  block: UIBlock;
}

const BlockRendererComponent: React.FC<BlockRendererProps> = ({ block }) => {
  const TargetComponent = ComponentFactory[block.type];

  if (!TargetComponent) {
    if (__DEV__) {
      console.warn(`[SDUI Engine] Unsupported block type dropped: ${block.type}`);
    }
    return null; 
  }

  return (
    <View style={{ marginVertical: 8 }}>
      <TargetComponent data={block.data} title={block.title} action={block.action} id={block.id} />
    </View>
  );
};


export const BlockRenderer = memo(BlockRendererComponent, (prevProps, nextProps) => {
  return prevProps.block.id === nextProps.block.id && prevProps.block === nextProps.block;
});