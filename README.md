## Overview

Replicate the provided design. The design is shared via the Figma link below, and the final implementation should match every detail, including styling, layout, and behavior.

## Design Reference

You can find the design for this assignment here:

**[Figma Design Link](https://www.figma.com/design/VtESIznVt2bkI6H3bxcrM5/Mentor-Assessment?node-id=0-1&t=ENG1LO8zm2mmb3xD-1)**

Make sure to reference this design throughout your implementation to ensure that all visual and interactive elements are consistent.

## Requirements

The application should meet the following requirements:

1. **Create Dialog Variants First:**

   - Begin by creating the **Dialog** component as it is used in multiple scenarios.
   - There are **three Dialog variants**: **Success**, **Info**, and **Danger**. Ensure that the look and feel of each variant match the design.

2. **Use the Provided Button Component:**

   - The **Button** component is already created and provided for you, so use the existing implementation instead of creating a new one.

3. **Create Button State Management:**

   - The "Create" button should only be enabled if **all fields are filled**.

4. **Modal and Dialog Interactions:**

   - When the "Create" button is clicked on the **Modal**, the **Info Dialog** should be displayed.
   - When the "Create" button is clicked on the **Info Dialog**, the **Success Dialog** should appear.

5. **Layering and Overlays:**

   - Ensure the **Dialog** appears on top of the **Modal**.
   - Add a **gray overlay** on the Modal when the Dialog is displayed.

6. **Close Button Functionality:**

   - The **x (close button)** should work correctly and **close the Modal** when clicked.

7. **Success Confirmation:**
   - After the user confirms creation, **close the Modal** and show the **Success Dialog**.

## Implementation Notes

- Ensure that the final result looks **exactly** like the provided Figma design.
- Pay attention to spacing, font styles, colors, and all other UI elements.
- Use `rem-calc` for producing `rem` values in your styles. Refer to the implementation in `Button.module.scss` for examples.
- Ensure all interactive elements function as described.
