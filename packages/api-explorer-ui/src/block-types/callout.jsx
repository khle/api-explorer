const React = require('react');
import Marked from '../lib/marked';

const CallOut = ({block}) => {
  const c = block.data.title ? '' : 'no-title';

  return (
    <div className={`magic-block-callout type-${block.data.type} ${c} `}>
      {
        (block.data.title) && (
          <h3>
            {
              (block.data.type === 'info') && (
                <i className="fa fa-info-circle" title="Info"/>
              )
            }

            {
              (block.data.type ==='warning') && (
                <i className="fa fa-exclamation-circle" title="Warning"/>
              )
            }

            {
              (block.data.type ==='danger') && (
                <i className="fa fa-exclamation-triangle" title="Danger"/>
              )
            }

            {
              (block.data.type ==='success') && (
                <i className="fa fa-check-square" title="Success"/>
              )
            }
            {block.data.title}
          </h3>

        (!block.data.title) && (
          <span className="noTitleIcon">
            {
              (block.data.type ==='info') && (
                <i className="fa fa-info-circle" title="Info"/>
              )
            }

            {
              (block.data.type ==='warning') && (
                <i className="fa fa-exclamation-circle" title="Warning"/>
              )
            }

            {
              (block.data.type ==='danger') && (
                <i className="fa fa-exclamation-triangle" title="Danger"/>
              )
            }

            {
              (block.data.type ==='success') && (
                <i className="fa fa-check-square" title="Success"/>
              )
            }
          </span>
        )
        (block.data && block.data.body) && (
          <div className="callout-body"> {block.data.body}</div>
        )
      )}
    </div>
  );
};

module.exports = CallOut;
