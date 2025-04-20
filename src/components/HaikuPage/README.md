
# SingleCard Component

## Description
The `SingleCard` component displays a haiku with editable lines, author details, and action buttons.

## Debugging Steps
1. Ensure the SCSS class names match those used in the JSX file.
2. Verify the `toggleInput` function toggles the correct input field.
3. Check the browser console for debugging logs:
   - "Toggling input for: [field]"
   - "Updating haiku line one: [value]"
4. Confirm the parent component passes the correct props (`Val`, `updateHaiku`, `deleteHaiku`, `likeHaiku`).

## Expected Behavior
- Clicking a haiku line toggles an input field for editing.
- Pressing "Enter" updates the haiku line and hides the input field.
- Action buttons perform their respective actions (like, delete).
