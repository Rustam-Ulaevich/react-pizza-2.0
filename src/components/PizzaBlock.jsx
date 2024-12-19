import React from 'react'

export function PizzaBlock() {
  return (
    <div class='pizza-block'>
      <img
				class="pizza-block_image"
        src=""
        alt="Pizza" />
			<h4 className="pizza-block_title">Чизбургер-пицца</h4>
			<div className="pizza-block_selector">
				<ul>
					<li class="active">тонкое</li>
					<li>традиционное</li>
				</ul>
				<ul>
					<li class="active">26см</li>
					<li>30см</li>
					<li>40см</li>
				</ul>
			</div>
			<div className="pizza-block_bottom">
				<div className="pizza-block_price">от 395р</div>
				<div className="button button--outline button--add">
					<svg>

					</svg>
					<span>Добавить</span>
					<i>2</i>
				</div>
			</div>
    </div>
  )
}
