import React from 'react';
import Form from 'react-bootstrap/Form';

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, label, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
        <Form.Check
            className="me-2" // Add margin end for spacing if needed
            type="checkbox"
            ref={resolvedRef}
            label={label && <span>{label}</span>} // Wrap label text in span for additional styling
            {...rest}
        />
    );
});

export default IndeterminateCheckbox;