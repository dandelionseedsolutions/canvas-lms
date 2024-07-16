/*
 * Copyright (C) 2024 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import {SVGIcon} from '@instructure/ui-svg-images'
import {type IconProps} from './iconTypes'

export default ({elementRef, size = 'small'}: IconProps) => {
  return (
    <SVGIcon
      elementRef={elementRef}
      src={`<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.70703 25.7389H3.72805H23.123C23.5691 25.7389 23.9312 25.3768 23.9312 24.9307V2.30324C23.9312 1.85716 23.5691 1.49512 23.123 1.49512H3.72805H3.70703L3.68683 1.49593L3.66582 1.49755L3.64562 1.49916L3.62542 1.50158L3.60521 1.50481L3.58501 1.50805L3.56481 1.51128L3.54541 1.51613L3.52602 1.52017L3.50662 1.52582L3.48803 1.53148L3.46864 1.53794L3.45005 1.54442L3.43146 1.55088L3.41369 1.55895L3.3951 1.56623L3.37732 1.57512L3.36035 1.5832L3.34257 1.5929L3.3256 1.60179L3.30863 1.6123L3.29247 1.6228L3.27631 1.63331L3.26014 1.64382L3.24479 1.65594L3.22943 1.66725L3.21408 1.67937L3.19953 1.6923L3.18499 1.70523L3.17044 1.71816L3.1567 1.7319L3.14297 1.74563L3.13003 1.76018L3.1171 1.77472L3.10417 1.78927L3.09205 1.80463L3.08074 1.81998L3.067 1.83857L3.05649 1.85392L3.04599 1.87009L3.03549 1.88624L3.02579 1.90322L3.01609 1.92019L3.0072 1.93716L2.99912 1.95494L2.99023 1.97191L2.98295 1.9905L2.97568 2.00827L2.96841 2.02687L2.96194 2.04545L2.95629 2.06403L2.95063 2.08343L2.94497 2.10283L2.94013 2.12222L2.93608 2.14162L2.93204 2.16182L2.92881 2.18203L2.92639 2.20304L2.92396 2.22404L2.92234 2.24505L2.92073 2.26203L2.91992 2.28223V2.29274C2.91992 2.29597 2.91992 2.30001 2.91992 2.30324V24.9307V24.9518L2.92073 24.972L2.92234 24.993L2.92396 25.0132L2.92639 25.0334L2.92962 25.0536L2.93285 25.0738L2.93608 25.094L2.94093 25.1134L2.94497 25.1328L2.95063 25.1522L2.95629 25.1708L2.96275 25.1902L2.96922 25.2087L2.97568 25.2273L2.98376 25.2451L2.99104 25.2637L2.99993 25.2815L3.00801 25.2984L3.0177 25.3162L3.02659 25.3332L3.0371 25.3502L3.04761 25.3663L3.05811 25.3825L3.06862 25.3986L3.08074 25.414L3.09205 25.4294L3.10417 25.4447L3.1171 25.4593L3.13003 25.4738L3.14297 25.4884L3.1567 25.5021L3.17044 25.5158L3.18499 25.5288L3.19953 25.5417L3.21408 25.5546L3.22943 25.5667L3.24479 25.578L3.26014 25.5902L3.27631 25.6007L3.29247 25.6112L3.30863 25.6217L3.3256 25.6322L3.34257 25.6411L3.36035 25.6508L3.37732 25.6589L3.3951 25.6678L3.41369 25.675L3.43146 25.6831L3.45005 25.6896L3.46864 25.696L3.48803 25.7025L3.50662 25.7082L3.52602 25.7138L3.54541 25.7179L3.56481 25.7227L3.58501 25.7259L3.60521 25.7292L3.62542 25.7324L3.64562 25.7348L3.66582 25.7364L3.68683 25.7381L3.70703 25.7389ZM20.6987 3.11137V8.76824C20.6987 9.06644 20.5346 9.3404 20.272 9.48101C20.0093 9.62163 19.6901 9.60627 19.442 9.4406L17.4662 8.12336L15.4903 9.4406C15.2422 9.60627 14.923 9.62163 14.6604 9.48101C14.3977 9.3404 14.2337 9.06644 14.2337 8.76824V3.11137H7.76867V24.1226H22.3149V3.11137H20.6987ZM4.53617 24.1226V3.11137H6.15242V24.1226H4.53617ZM19.0824 3.11137V7.25785L17.9147 6.47963C17.6432 6.29861 17.2892 6.29861 17.0177 6.47963L15.8499 7.25785V3.11137H19.0824Z" fill="currentColor"/>
</svg>
`}
      size={size}
    />
  )
}
