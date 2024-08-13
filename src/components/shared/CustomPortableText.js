import React from 'react';
import PortableText from '@sanity/block-content-to-react';

const CustomPortableText = ({ blocks, projectId = 'default-id', dataset = 'default-dataset' }) => {
  return (
    <PortableText blocks={blocks} projectId={projectId} dataset={dataset} />
  );
};

export default CustomPortableText;
