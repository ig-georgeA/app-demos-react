import { redirect } from 'react-router-dom';
import FinancialChart from './financial-chart/financial-chart';
import DynamicRouting from './dynamic-routing/dynamic-routing';
import RouteDetails from './route-details/route-details';
import SelectionDetail from './selection-detail/selection-detail';
import GridWithTemplates from './grid-with-templates/grid-with-templates';
import GridCRUD from './grid-crud/grid-crud';
import Layouts from './layouts/layouts';
import Position from './position/position';
import TabLayout from './tab-layout/tab-layout';
import ExpansionPanelsTree from './expansion-panels-tree/expansion-panels-tree';
import Stepper from './stepper/stepper';
import CardCalendar from './card-calendar/card-calendar';
import ListsData from './lists-data/lists-data';
import GridAndTreeGrid from './grid-and-tree-grid/grid-and-tree-grid';
import PivotGrid from './pivot-grid/pivot-grid';
import Reveal from './reveal/reveal';
import CategoryCharts from './category-charts/category-charts';
import TypeScale from './type-scale/type-scale';
import Inputs from './inputs/inputs';
import PickersCombo from './pickers-combo/pickers-combo';
import DialogsAndDropdowns from './dialogs-and-dropdowns/dialogs-and-dropdowns';
import Image from './image/image';
export const routes = [
  { index: true, loader: () => redirect('financial-chart') },
  { path: 'financial-chart', element: <FinancialChart />, text: 'Financial chart' },
  { path: 'dynamic-routing', element: <DynamicRouting />, text: 'Dynamic routing' },
  { path: 'route-details/:rCustomerID?', element: <RouteDetails />, text: 'Route details' },
  { path: 'selection-detail', element: <SelectionDetail />, text: 'Selection-detail' },
  { path: 'grid-with-templates', element: <GridWithTemplates />, text: 'Grid with templates' },
  { path: 'grid-crud', element: <GridCRUD />, text: 'Grid CRUD' },
  { path: 'layouts', element: <Layouts />, text: 'Layouts' },
  { path: 'position', element: <Position />, text: 'Position' },
  { path: 'tab-layout', element: <TabLayout />, text: 'Tab layout' },
  { path: 'expansion-panels-tree', element: <ExpansionPanelsTree />, text: 'Expansion panels-tree' },
  { path: 'stepper', element: <Stepper />, text: 'Stepper' },
  { path: 'card-calendar', element: <CardCalendar />, text: 'Card Calendar' },
  { path: 'lists-data', element: <ListsData />, text: 'Lists data' },
  { path: 'grid-and-tree-grid', element: <GridAndTreeGrid />, text: 'Grid and Tree-grid' },
  { path: 'pivot-grid', element: <PivotGrid />, text: 'Pivot grid' },
  { path: 'reveal', element: <Reveal />, text: 'Reveal' },
  { path: 'category-charts', element: <CategoryCharts />, text: 'Category charts' },
  { path: 'type-scale', element: <TypeScale />, text: 'Type scale' },
  { path: 'inputs', element: <Inputs />, text: 'Inputs' },
  { path: 'pickers-combo', element: <PickersCombo />, text: 'Pickers Combo' },
  { path: 'dialogs-and-dropdowns', element: <DialogsAndDropdowns />, text: 'Dialogs and dropdowns' },
  { path: 'image', element: <Image />, text: 'Image' }
];
