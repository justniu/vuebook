// @returns {VNode}
createElement(
	// -----------------��һ��������������-----------------
  // {String | Object | Function}
  // һ��HTML��ǩ�������ѡ����󣬻���
  // ���������κ�һ�ֵ�һ��async������
  'div',

	// -----------------�ڶ�����������ѡ-----------------
  // {Object}
  // һ����ģ�������Զ�Ӧ�����ݶ���
  {
    // ��v-bind:classһ����API��
	  // ����һ���ַ�����������ַ����Ͷ��������
	  'class': {
	    foo: true,
	    bar: false
	  },
	  // ��v-bind:styleһ����API��
	  // ����һ���ַ��������󣬻��������
	  style: {
	    color: 'red',
	    fontSize: '14px'
	  },
	  // ��ͨ��HTML����
	  attrs: {
	    id: 'foo'
	  },
	  // ���prop
	  props: {
	    myProp: 'bar'
	  },
	  // DOM����
	  domProps: {
	    innerHTML: 'baz'
	  },
	  // ��'on'�����ڵ��¼���������
	  // ����֧���� 'v-on:keyup.enter' ���������η���
	  // ��Ҫ�ڴ��������ֶ���� keyCode��
	  on: {
	    click: this.clickHandler
	  },
	  // ��������������ڼ���ԭ���¼���
	  //����������ڲ�ʹ��vm.$emit�������Զ����¼���
	  nativeOn: {
	    click: this.nativeClickHandler
	  },
	  // �Զ���ָ�ע�⣬���ܶ�binding�е�oldValue��ֵ��
	  // ��ΪVue�������������
	  directives: [
	    {
	      name: 'my-custom-directive',
	      value: '2',
	      expression: '1 + 1',
	      arg: 'foo',
	      modifiers: {
	        bar: true
	      }
	    }
	  ],
	  // �������۵ĸ�ʽΪ
	  // { name: props => VNode | Array<VNode> }
	  scopedSlots: {
	    default: props => createElement('span', props.text)
	  },
	  // ��������������������������Ϊ���ָ������
	  slot: 'name-of-slot',
	  // �������ⶥ������
	  key: 'myKey',
	  ref: 'myRef',
	  // �����render�����и����Ԫ�ض�Ӧ������ͬ��ref����
	  // ��ô $refs.myRef ����һ�����顣
	  refInFor: true
	},

	// -----------------��������������ѡ-----------------
  // {String | Array}
  // ������ڵ� (VNodes)����createElement()�������ɣ�
  // Ҳ����ʹ���ַ��������ɡ��ı�����ڵ㡱��
  [
    '��дһЩ�ı�',
    createElement('h1', 'һ��ͷ��'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)