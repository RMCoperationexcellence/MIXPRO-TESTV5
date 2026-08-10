# Project Setup Prompt — Visual Studio 2026 C# WinForms Web Simulator

You are a senior Frontend Engineer and UI/UX Engineer.

Your task is to create the **initial project structure and UI foundation only** for a browser-based application that visually and behaviorally resembles **Microsoft Visual Studio 2026** as closely as reasonably possible.

Before writing any code:

1. Read AGENTS.md from the project root.
2. Treat AGENTS.md as the authoritative project specification.
3. Do not violate or reinterpret the constraints defined in `AGENTS.md`.
4. If there is a conflict between this prompt and `AGENTS.md`, follow `AGENTS.md`.

---

# 1. Project Objective

Build a web-based simulation of:

**Microsoft Visual Studio 2026**

configured specifically for:

* Project Type: Windows Application / Windows Forms
* Framework: .NET 10.0
* Language: C#
* UI paradigm: Windows Forms Designer

The actual application itself must be implemented with:

* HTML
* JavaScript
* CSS
* Tailwind CSS

This is NOT a real Visual Studio extension.

This is NOT a real .NET runtime.

This is NOT a VS Code clone.

This is a browser application that recreates the Visual Studio development environment and Windows Forms editing experience.

The visual direction should feel like:

> “Microsoft Visual Studio 2026 running a C# .NET 10 Windows Forms project inside the browser.”

---

# 2. Current Development Phase

For this task, DO NOT build the complete application yet.

Only create:

* project architecture
* application shell
* reusable UI components
* initial layout
* mock IDE state
* mock project/file structure
* basic panel interactions
* initial Windows Forms Designer canvas

The result should be a strong foundation for future implementation.

Avoid implementing complex features prematurely.

---

# 3. Mandatory Technology

Use only:

* HTML
* JavaScript
* CSS
* Tailwind CSS

If the repository already has an existing frontend framework or build configuration, inspect it first and work with the existing architecture where reasonable.

Do NOT unnecessarily migrate the project to another framework.

Do NOT introduce:

* React unless already required by the repository
* Vue
* Angular
* Svelte
* Bootstrap
* Material UI
* Chakra UI
* Ant Design

Do not use large third-party UI frameworks to fake Visual Studio.

Build the Visual Studio UI using native HTML/CSS/Tailwind and small reusable JavaScript modules/components.

---

# 4. Target IDE Layout

Create the main Visual Studio workspace shell.

The application should initially contain these major regions:

text
┌────────────────────────────────────────────────────────────────────┐
│ Visual Studio Title Bar                                            │
├────────────────────────────────────────────────────────────────────┤
│ Menu Bar                                                           │
│ File Edit View Git Project Build Debug Test Analyze Tools ...      │
├────────────────────────────────────────────────────────────────────┤
│ Main Toolbar                                                       │
│ Debug | Any CPU | Start | Search | Git controls                    │
├───────────────┬─────────────────────────────────────┬──────────────┤
│               │                                     │              │
│ Toolbox       │ Main Document Workspace             │ Solution     │
│               │                                     │ Explorer     │
│               │                                     │              │
│               │ Windows Forms Designer              ├──────────────┤
│               │ or Code Editor                      │ Properties   │
│               │                                     │              │
├───────────────┴─────────────────────────────────────┴──────────────┤
│ Error List / Output / Debug / Terminal-like tool windows           │
├────────────────────────────────────────────────────────────────────┤
│ Visual Studio Status Bar                                           │
└────────────────────────────────────────────────────────────────────┘

Do not design this like a modern SaaS dashboard.

It must feel like a desktop IDE.

---

# 5. Initial Project Mock Data

Create a mock solution named:

text
WinFormsApplication1

Project:

text
WinFormsApplication1

Configuration:

text
C#
.NET 10.0
Windows Application

The Solution Explorer should initially contain something similar to:

text
Solution 'WinFormsApplication1' (1 of 1 project)

WinFormsApplication1
├── Dependencies
├── Properties
├── Program.cs
├── frmBlank.cs
│   ├── frmBlank.Designer.cs
│   └── frmBlank.resx

The exact visual hierarchy should resemble Visual Studio Solution Explorer.

---

# 6. Critical Form File Rule

Every Windows Form MUST consist of exactly this logical file group:

text
<FormName>.cs
<FormName>.Designer.cs
<FormName>.resx

Example:

text
frmBlank.cs
frmBlank.Designer.cs
frmBlank.resx

The UI must visually communicate that:

text
frmBlank.cs
├── frmBlank.Designer.cs
└── frmBlank.resx

are related files belonging to one Windows Form.

Do not create WPF file structures.

Never use:

text
.xaml
.xaml.cs

Do not use:

text
.razor

Do not use MAUI, WinUI, Avalonia, Electron or similar technologies as the simulated target application.

---

# 7. Main Initial Form

Use:

text
frmBlank

as the first Windows Form.

The designer document tab should look similar to:

text
frmBlank.cs [Design]

Also prepare the UI architecture so that later it can support:

text
frmBlank.cs
frmBlank.cs [Design]

as different document views.

For this first phase, default to the Designer view.

---

# 8. Windows Forms Designer Canvas

Create an initial WinForms Designer area.

It should contain a visual representation of a blank Windows Form.

Example metadata:

text
Name: frmBlank
Text: frmBlank
StartPosition: WindowsDefaultLocation
Size: 800, 450
FormBorderStyle: Sizable

The form should visually resemble an actual Windows desktop form.

It should NOT look like a website card.

Include recognizable form characteristics such as:

* Windows title bar
* application icon placeholder
* form caption
* minimize button
* maximize button
* close button
* Windows-style border
* blank client area

The form should sit inside a larger Visual Studio designer workspace.

The designer workspace background should resemble Visual Studio's actual Windows Forms Designer environment.

---

# 9. Toolbox

Create a left-side Toolbox.

Add initial categories such as:

text
Search Toolbox

Common Controls
Containers
Menus & Toolbars
Data
Components
Printing
Dialogs
General

Under `Common Controls`, show several representative WinForms components:

text
Pointer
Button
CheckBox
ComboBox
DateTimePicker
Label
LinkLabel
ListBox
ListView
MaskedTextBox
MonthCalendar
NumericUpDown
PictureBox
ProgressBar
RadioButton
RichTextBox
TextBox
TreeView

For this phase these controls do NOT need full drag-and-drop behavior.

They need to visually resemble Visual Studio Toolbox entries.

Basic selection/hover behavior is sufficient.

---

# 10. Solution Explorer

Create the Solution Explorer on the right side.

Include:

* toolbar icons
* search field
* solution node
* project node
* nested files
* expand/collapse state
* selected file state
* Visual Studio-like file icons

Initially select:

text
frmBlank.cs

or:

text
frmBlank.cs [Design]

as appropriate.

---

# 11. Properties Window

Below Solution Explorer, create a Properties panel.

When the initial Form is selected, show properties similar to:

text
(Name)             frmBlank
AcceptButton       (none)
AutoScaleMode      Font
AutoScroll         False
BackColor          Control
ControlBox         True
FormBorderStyle    Sizable
Icon               (Icon)
MaximizeBox        True
MinimizeBox        True
Name               frmBlank
ShowIcon           True
ShowInTaskbar      True
Size               800, 450
StartPosition      WindowsDefaultLocation
Text               frmBlank
WindowState        Normal

Create the properties UI in a reusable way so later selected controls can provide their own property values.

Include:

* categorized mode button
* alphabetical mode button
* property/event toggle concept
* property name column
* property value column

Do not make it look like a generic HTML table.

It should visually resemble Visual Studio's Properties tool window.

---

# 12. Menu Bar

Create a Visual Studio-style menu bar with at least:

text
File
Edit
View
Git
Project
Build
Debug
Test
Analyze
Tools
Extensions
Window
Help

For now, the menus do not need complete functionality.

Implement hover/click states and optionally a few mock dropdown menus.

---

# 13. Toolbar

Create an IDE toolbar containing representative controls such as:

text
Debug
Any CPU
WinFormsApplication1
▶ Start

Hot Reload
Search
Git

The Start button should visually resemble Visual Studio's green run/play action.

Do not use oversized web buttons.

Toolbar controls must be compact and desktop-application-like.

---

# 14. Document Tabs

Implement a Visual Studio-style document tab system.

Initially show:

text
frmBlank.cs [Design]

Prepare mock tabs for:

text
frmBlank.cs
Program.cs

Tabs should support basic:

* active state
* inactive state
* close icon
* hover state

Do not implement a full tab manager yet.

---

# 15. Bottom Tool Window

Create a bottom docked tool-window area.

Include tabs such as:

text
Error List
Output
Find Results
Breakpoints
Call Stack

Default selected tab:

text
Error List

Mock content:

text
0 Errors
0 Warnings
0 Messages

The panel should be collapsible or resizable at a basic level if practical.

---

# 16. Status Bar

Create a Visual Studio-like status bar.

Include representative information:

text
Ready
Ln 1
Col 1
Spaces: 4
UTF-8
CRLF

For Designer mode, some code-specific indicators can be hidden or mocked.

--